---
name: AfuChat Next.js migration
description: Key decisions and gotchas from the Vite+wouter → Next.js 15 App Router migration of the AfuChat marketing website.
---

## Directory structure (IMPORTANT)

- **App Router lives at `src/app/`** (not root `app/`). Next.js 15 infers the source root from tsconfig `paths: { "@/*": ["./src/*"] }` and generates validator type paths as `../../src/app/...`. If `app/` is at root, the generated `.next/types/validator.ts` points to `../../src/app/...` which doesn't exist → build type error. Solution: keep App Router in `src/app/`.
- **Client page components live at `src/views/`** (NOT `src/pages/`). Next.js detects any `src/pages/` directory as a Pages Router and generates stale route types for those files. Renamed to `src/views/` to avoid this.
- **Page pattern**: `src/app/*/page.tsx` = server component that exports `metadata` + renders the corresponding `src/views/*.tsx` client component. This gives SSR for meta tags while keeping framer-motion animations.

## Vercel deployment config (vercel.json)

```json
{
  "installCommand": "cd ../.. && pnpm install",
  "buildCommand": "pnpm run build",
  "framework": "nextjs"
}
```

Do NOT use `build:ssg`, `outputDirectory: "dist/public"`, or SPA rewrites — those are from the old Vite config.

## Other architecture decisions

- **ProductPage** receives `id` as a prop from the server `src/app/products/[id]/page.tsx` (Next.js 15 style: `params` is a `Promise<{ id: string }>`).
- **`generateStaticParams`** added to product detail page so Next.js knows all valid product ids at build time.
- **Login redirect** = server page with metadata + `LoginRedirect` client child that calls `window.location.replace`.

## Package changes

- Removed: `vite`, `@vitejs/plugin-react`, `@tailwindcss/vite`, `wouter`, `react-helmet-async`, all `@replit/vite-plugin-*`.
- Added: `next` (prod dep), `@tailwindcss/postcss` (dev dep).
- Tailwind v4 with Next.js requires `@tailwindcss/postcss` + `postcss.config.mjs`; CSS keeps `@import 'tailwindcss'`.

## Asset migration

- 3 files from `src/assets/*.png` → `public/assets/` and imported as plain strings (`'/assets/...'`) in Navbar, Footer, ReviewsSection.
- All illustrations already in `public/illustrations/`; `src/data/illustrations.ts` rewritten to export plain string paths.

## Trustpilot data

- `TrustpilotReview` interface uses field `quote` (not `body`). ReviewsSection must use `review.quote`.

## Removed unused stubs

- Deleted shadcn/ui stubs (`calendar`, `carousel`, `chart`, `command`, `drawer`, `form`, `input-otp`, `resizable`, `sonner`) that had missing package dependencies and were not used anywhere.

**Why:** These caused typecheck failures blocking `next build`.

## View layout pattern

Views in `src/views/` do NOT use a Layout wrapper component. They include `<Footer />` directly and rely on the app-level `src/app/layout.tsx` for the Navbar. Pattern:

```tsx
export default function MyPage() {
  return (
    <div className="relative flex flex-col w-full">
      {/* page sections */}
      <Footer />
    </div>
  );
}
```

## Dev server

Script: `next dev -p ${PORT:-3000} -H 0.0.0.0` — PORT env var set by Replit.

## allowedDevOrigins

`next.config.ts` has `allowedDevOrigins: ['*']` to suppress cross-origin warning in the Replit proxy iframe.

## No backend — Supabase only

This site intentionally has zero custom server/API routes; all dynamic data goes through `src/lib/supabase.ts` (client-side, anon key + RLS). An orphaned `artifacts/api-server` (dist + node_modules, no source, unreferenced) existed from an earlier iteration and was deleted — don't recreate a backend for this site without an explicit decision to do so.

**Why:** avoids duplicate/confusing data paths and keeps deploy simple (static/SSR only, no server process to run in prod).

## Domain

Production domain is `afuchat.com`. Must stay consistent across `metadataBase` (layout.tsx), `public/sitemap.xml`, `public/robots.txt`, and every page's `alternates.canonical`.

## Asset hygiene

Only `public/illustrations/` should hold illustration/background images referenced via `src/data/illustrations.ts`. A stray root-level `/home/runner/workspace/public/` (pre-migration Vite leftover, own `index.html` with hashed asset refs) and various unreferenced `bg-*`/`ill-*` files in the artifact's own `public/` were found and deleted — check for unreferenced images periodically since they silently accumulate.

Favicon is PNG-only (`public/favicon.png`) — SVG was intentionally dropped for consistent rendering; see `layout.tsx` `metadata.icons`.

## Image weight (perf)

Because `images.unoptimized: true` means plain `<img>` tags with zero server-side resizing/compression, every file in `public/illustrations/` must already be sized/compressed for its actual max display width before being committed — Next.js will not shrink or compress it for you. AI-generated illustrations especially tend to land at full-resolution (e.g. 1024x1024, ~1MB+ each); resize them (sharp: `.resize({width}).png({compressionLevel:9, quality:80, palette:true})`) to their real rendered size (icons ~256px, hero illustrations ~900px) right after generating them, not as an afterthought.

**Why:** 32 illustration files at ~1MB each (34MB total) caused visibly slow page loads, especially for images — this wasn't a code bug, just unoptimized asset weight. Resizing to actual display dimensions cut it to ~2.5MB with no visual quality loss.

**How to apply:** whenever new illustrations/icons are added to this site, immediately compress/resize them to display size before wiring them in. `sharp` is available in the workspace via `node_modules/.pnpm/sharp@<version>/node_modules/sharp` even when not a direct dependency of the artifact — if a plain `require('sharp')`/`import sharp from 'sharp'` fails with MODULE_NOT_FOUND, resolve it via that `.pnpm` store path directly, or add `sharp` to `pnpm-workspace.yaml`'s `onlyBuiltDependencies` and reinstall if its native build script was ignored.

All `public/illustrations/*` are `.webp` (converted from PNG, ~45% smaller again at quality 82) — always export/save new illustrations as `.webp`, not `.png`, and register the path with that extension in `src/data/illustrations.ts`. Every below-the-fold `<img>` also has `loading="lazy" decoding="async"`; only true above-the-fold hero images (home hero, each page's own top illustration, nav/footer logos) stay eager — keep new images consistent with this split. Do NOT inline images as base64: it adds ~33% size overhead, blocks the initial HTML/JS payload instead of loading in parallel, and defeats browser caching — always use plain file-based `<img src="/illustrations/...">` refs, never base64 data URIs.

See `artifacts/afuchat-website/README.md` for the full dev-facing setup/conventions doc.
