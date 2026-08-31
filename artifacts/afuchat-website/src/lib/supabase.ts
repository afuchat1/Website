import { createBrowserClient } from '@supabase/ssr';

// Public Supabase credentials — safe to ship in client bundles.
// The anon key is intentionally distributable and gated by RLS on the server.
const SUPABASE_URL = 'https://rhnsjqqtdzlkvqazfcbg.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJobnNqcXF0ZHpsa3ZxYXpmY2JnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE2NzA4NjksImV4cCI6MjA3NzI0Njg2OX0.j8zuszO1K6Apjn-jRiVUyZeqe3Re424xyOho9qDl_oY';

// The root domain that both afuchat.com (this marketing site) and
// web.afuchat.com (the product app) share. Sessions are stored as a cookie
// scoped to this domain (instead of the default per-origin localStorage) so
// that a login on web.afuchat.com is visible here too, and vice versa.
//
// IMPORTANT: web.afuchat.com must also use `@supabase/ssr`'s
// `createBrowserClient` with the SAME `cookieOptions.domain` value — if it
// keeps the default Supabase SDK (localStorage-based sessions) or scopes its
// cookie only to its own subdomain, this site will never see it as logged in.
const SHARED_COOKIE_DOMAIN = '.afuchat.com';

function isProdHost(): boolean {
  if (typeof window === 'undefined') return false;
  return window.location.hostname.endsWith('afuchat.com');
}

export const supabase = createBrowserClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  cookieOptions: {
    // Only scope the cookie to the shared root domain (and mark it Secure)
    // on real afuchat.com hosts. On localhost/preview domains, both must be
    // left unset — a `Secure` cookie is silently dropped over plain HTTP,
    // and a `.afuchat.com` domain isn't valid there either.
    domain: isProdHost() ? SHARED_COOKIE_DOMAIN : undefined,
    path: '/',
    sameSite: 'lax',
    secure: isProdHost(),
  },
});
