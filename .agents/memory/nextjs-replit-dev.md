---
name: Next.js on Replit dev setup
description: Key quirks for running Next.js 15 App Router in Replit's proxied iframe environment, including allowedDevOrigins, output mode, and cache issues.
---

## allowedDevOrigins — multi-level subdomain

Replit's preview proxy uses multi-level subdomains (e.g. `abc-00-xyz.worf.replit.dev`). The glob `*.replit.dev` does NOT match these. The correct config:

```ts
const devDomain = process.env.REPLIT_DEV_DOMAIN ?? '';
const nextConfig: NextConfig = {
  allowedDevOrigins: [
    '*.worf.replit.dev',
    '*.janeway.replit.dev',
    '*.kirk.replit.dev',
    '*.picard.replit.dev',
    ...(devDomain ? [devDomain] : []),
  ],
};
```

Always spread `REPLIT_DEV_DOMAIN` as a fallback for unknown proxy names.

**Why:** Without this, Next.js blocks `/_next/static/chunks/*` requests as cross-origin, JS never loads, page appears blank.

## Do NOT use `output: 'export'` with browser-only client libraries

`output: 'export'` triggers full SSR static pre-rendering. Any `'use client'` component that imports a browser-only module at module init time (e.g. `@supabase/ssr`'s `createBrowserClient`) will crash with `TypeError: a[d] is not a function` in webpack-runtime.

**Fix:** Omit `output: 'export'` entirely. Configure production to run `next start` via the artifact.toml `run` key. The production build (`next build`) still succeeds cleanly.

## Stale `.next` cache causes `clientReferenceManifest` / `loadManifest` errors

If you switch from another framework (e.g. Vite) to Next.js, or change `output` mode, always `rm -rf .next` before restarting. The font manifest and client reference manifest from the old build cause hard-to-diagnose 500 errors.

**Why:** `next dev` reads the `.next` directory from whatever last ran — stale data causes cryptic invariant errors.

## Never run `next build` while `next dev` is running

Running `next build` while the dev server is live overwrites `.next/` with a production build structure the dev server can't read. This causes `prerender-manifest.json` not found errors and cascading 500s. Always stop the dev server, build, then restart.

## `'use client'` must be the very first expression

A blank line before `'use client'` is rejected by Next.js 15 with "The 'use client' directive must be placed before other expressions." This is stricter than Vite/standard TS handling. Ensure no leading blank lines in any file that uses the directive.

## robots.ts / sitemap.ts require `export const dynamic = 'force-static'`

In `output: 'export'` mode, route handlers that return `MetadataRoute` objects need this export or the build fails with "export const dynamic not configured."

## `src/pages/_error.tsx` stub required for static export + App Router

When `output: 'export'` is active alongside the App Router, the internal `/_error` page attempts to use `<Html>` from `next/document` which is incompatible. Creating a minimal stub at `src/pages/_error.tsx` returning `null` prevents the export crash.
