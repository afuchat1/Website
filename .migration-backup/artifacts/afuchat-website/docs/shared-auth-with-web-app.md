# Sharing login state with afuchat.com (marketing site)

**Goal:** someone already logged into `web.afuchat.com` should see "Open App"
on `afuchat.com` instead of Login/Sign Up — without logging in twice.

## Why this works

Both projects already use the same Supabase project (same URL + anon key),
so "same database" = shared Supabase Auth. The only missing piece is *where*
the session token lives. By default the Supabase JS SDK stores sessions in
`localStorage`, which is **not** shared across subdomains — `afuchat.com`
and `web.afuchat.com` have separate storage even on the same root domain.

The fix: store the session in a **cookie scoped to `.afuchat.com`** (note
the leading dot) instead of `localStorage`. A cookie with that domain is
readable by *any* subdomain of `afuchat.com` over HTTPS, so both sites can
check "is there a valid session?" against the exact same cookie.

## What afuchat.com (marketing site) already does

`artifacts/afuchat-website/src/lib/supabase.ts` uses `@supabase/ssr`'s
`createBrowserClient` (not the default `createClient` from
`@supabase/supabase-js`) with:

```ts
createBrowserClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  cookieOptions: {
    domain: isProdHost() ? '.afuchat.com' : undefined, // only on real afuchat.com hosts
    path: '/',
    sameSite: 'lax',
    secure: isProdHost(), // Secure cookies are dropped over plain HTTP (e.g. localhost)
  },
});
```

The Navbar (`src/components/layout/Navbar.tsx`) calls
`supabase.auth.getSession()` + subscribes via `onAuthStateChange`, and shows
"Open App →" (linking to `https://web.afuchat.com`) whenever a session is
present, instead of Login/Sign Up.

## What web.afuchat.com needs to do

1. **Install `@supabase/ssr`** if not already present:
   ```
   pnpm add @supabase/ssr
   ```

2. **Replace** any `createClient` from `@supabase/supabase-js` used for the
   browser/client-side Supabase instance with `createBrowserClient` from
   `@supabase/ssr`, using the **exact same `cookieOptions`** as above:
   - `domain: '.afuchat.com'` (only when running on a real `afuchat.com`
     subdomain — leave unset on localhost/preview/staging domains that
     aren't under `afuchat.com`, or the cookie won't be written there).
   - `sameSite: 'lax'`
   - `secure: true` (only when serving over HTTPS — same caveat as above).

   The domain/secure logic **must match exactly** — if one side writes to
   `.afuchat.com` and the other reads only its own subdomain's cookie (or
   still uses `localStorage`), neither side will see the other's session.

3. Confirm the app is served over **HTTPS** in production — `Secure`
   cookies are silently dropped over plain HTTP, which would break this
   entirely without any visible error.

4. No login flow changes are needed beyond this — once both apps read/write
   the same cookie, an existing web.afuchat.com session becomes visible on
   afuchat.com automatically (and vice versa, if web.afuchat.com ever wants
   to reflect logins that happened on the marketing site).

## How to verify it's working

1. Log in on `web.afuchat.com`.
2. Open browser dev tools → Application → Cookies, and confirm a Supabase
   auth cookie (name starts with `sb-`) exists with **Domain = `.afuchat.com`**
   (not scoped to just `web.afuchat.com`).
3. Visit `afuchat.com` — the Navbar should show "Open App →" within a
   moment of load, without a flash of "Log in / Sign Up" first.
4. If it doesn't: check the cookie's `Domain` attribute in dev tools first —
   that's almost always the culprit (wrong domain, missing `Secure` over
   HTTP, or still using `localStorage`).

## Bonus: sharing cookie-consent choices too

The same `.afuchat.com` cookie-domain trick is also used for the cookie
**consent** banner (Strictly Necessary / Functional / Performance /
Targeting), so a choice made on one site doesn't have to be made again on
the other.

- **File:** `artifacts/afuchat-website/src/lib/cookieConsent.ts`
- **Cookie name:** `afuchat_cookie_consent`
- **Shape:** `{ prefs: { functional, performance, targeting }, decidedAt }`
  as a JSON string, written with the exact same domain/secure/sameSite
  rules as the Supabase auth cookie above (`.afuchat.com` + `Secure` on
  real `afuchat.com` hosts, unset on localhost/preview), `path=/`,
  `SameSite=Lax`, `max-age` of 180 days.
- **UI:** `src/components/layout/CookieConsent.tsx` — shows the banner if
  the cookie is missing/invalid, and can be reopened via
  `openCookiePreferences()` from `cookieConsent.ts` (wired to a "Manage
  Cookies" link in the footer).

If `web.afuchat.com` wants to honor (or contribute to) the same consent
decision instead of showing its own separate banner:

1. Read/write the same cookie name (`afuchat_cookie_consent`) with the same
   domain rules described above — copy the `readCookie` / `writeCookie`
   helpers in `cookieConsent.ts` verbatim, they're framework-agnostic.
2. Before initializing anything in the Functional / Performance / Targeting
   categories (e.g. analytics, ad pixels, personalization), check the
   parsed `prefs` from the cookie and skip initialization for any category
   that's `false` or if no cookie exists yet (treat "no cookie" as "nothing
   granted", same as this site does with `DEFAULT_PREFS`).
3. Don't show a second banner if a valid `afuchat_cookie_consent` cookie
   already exists when the visitor arrives — that means they already made a
   choice on the other site.
