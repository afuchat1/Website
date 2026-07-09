# AfuChat Website

Corporate marketing site for AfuChat Technologies — built with **Next.js 15 (App Router)**, deployed to **Vercel** at `https://afuchat.com`.

This document exists so future changes don't silently break the site. Read it before restructuring folders, adding a backend, or changing how data is fetched.

## Golden rules

1. **No server-side API routes.** This site talks to Supabase directly from the client — never add `src/app/api/**/route.ts`, a custom Express/Fastify server, or any backend of its own. If you need new data, either add it to Supabase and query it from a client component, or add it as static data in `src/data/`. An `api-server` artifact existed at one point and was fully unused — it was deleted. Do not recreate it "just in case."
2. **All routing lives under `src/app/`** (App Router). Each folder is a route; `page.tsx` is the server-rendered entry, and it should stay a thin wrapper that only sets `metadata` and renders a client component.
3. **Page logic lives in `src/views/`, not in `src/app/`.** By convention, `src/app/<route>/page.tsx` imports and renders a `'use client'` component from `src/views/`. This split exists because Next's App Router treats `page.tsx` specially — putting `'use client'` state/hooks directly there causes route-type collisions. Keep new pages consistent with this pattern.
4. **Domain is `afuchat.com`, not `web.afuchat.com`.** `metadataBase` in `src/app/layout.tsx`, `public/sitemap.xml`, `public/robots.txt`, and every page's `alternates.canonical` must all agree on this. If the production domain ever changes again, update all of these together — a mismatch breaks SEO/canonical tags silently (no build error).
5. **Images are unoptimized by design.** `next.config.ts` sets `images.unoptimized: true` so plain `<img>` tags work without Next's image pipeline — this was a deliberate simplification from the original Vite migration. Don't swap to `next/image` casually; if you do, update every `<img>` usage consistently.
6. **`allowedDevOrigins: ['*']` in `next.config.ts` is required for the Replit preview proxy.** Without it, dev server requests get blocked as cross-origin and the page silently fails to hot-reload or load `_next/*` assets. Do not remove this for local/Replit dev.

## Directory map

```
src/
  app/            Route segments (App Router). Thin: metadata + render a view.
  views/          Client ('use client') page components — the real page logic.
  components/
    layout/       Navbar, Footer — shared across all pages.
    home/         Homepage-only sections (Hero, Products, Reviews, etc.).
    ui/           shadcn/ui primitives. Only keep the ones actually imported —
                   14 unused ones (aspect-ratio, breadcrumb, collapsible, etc.)
                   were already removed; don't re-add a primitive "for later."
  data/           Static content: products.ts, illustrations.ts, trustpilot.ts.
  lib/supabase.ts Single Supabase client instance — import this, never
                   instantiate a second createClient() elsewhere.
  hooks/          Shared React hooks.
public/
  illustrations/  The only illustration/background assets the site uses.
                   Don't drop new images anywhere else in public/ — assets
                   outside this folder (plus assets/, favicon.png) tend to
                   go stale and get cleaned up later. Old ones already removed:
                   bg-*.jpg, ill-*.jpg/png, brand-bg.png, favicon.svg.
  assets/         Logo, app-store badges, Trustpilot logo — referenced by
                   absolute path (e.g. /assets/afuchat_logo_transparent.png).
  favicon.png     Single favicon format (PNG only — SVG was intentionally
                   dropped so the favicon renders consistently everywhere).
  sitemap.xml     Manually maintained. Add a new <url> entry whenever a route
                   is added; keep <loc> using the afuchat.com domain.
  robots.txt      Explicitly allows AI crawlers (GPTBot, ClaudeBot, etc.) —
                   don't remove those entries without checking with the team.
```

## Data flow

- **Supabase is the only backend.** `src/lib/supabase.ts` holds the client (public anon key, gated by Row Level Security — safe to ship). Any live data (e.g. member counts/avatars on the homepage) is fetched client-side via `supabase.from(...)`.
- **Static content** (product descriptions, illustration paths, Trustpilot reviews) lives in `src/data/*.ts` as plain exported constants/arrays — imported directly by components. There is no CMS and no fetch layer for this content; edit the files directly.

## Before you add something new

- **New page?** Add `src/app/<route>/page.tsx` (metadata + canonical URL using `afuchat.com`) + `src/views/<Name>.tsx` (the actual UI), then add it to `public/sitemap.xml`.
- **New image?** Put it in `public/illustrations/` and export its path as a constant in `src/data/illustrations.ts` — don't hardcode raw path strings inline in components.
- **New dependency?** Before installing, check it isn't already covered by an existing Radix/shadcn primitive in `src/components/ui/`.
- **Need a new backend capability?** Add it to Supabase (table, RLS policy, edge function) — do not stand up a custom server for this site.

## Local dev

```
pnpm --filter @workspace/afuchat-website run dev        # start dev server
pnpm --filter @workspace/afuchat-website run typecheck  # must pass before shipping
pnpm --filter @workspace/afuchat-website run build       # production build (Vercel runs this)
```

If the preview looks visually broken (missing styles, giant/misplaced images) after a dependency or config change, it's almost always a stale `.next` cache — delete `artifacts/afuchat-website/.next` and restart the workflow before assuming the code is wrong.
