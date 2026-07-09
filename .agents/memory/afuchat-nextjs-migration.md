---
name: AfuChat Next.js migration
description: Key decisions and gotchas from the Vite+wouter → Next.js 15 App Router migration of the AfuChat marketing website.
---

## Architecture decisions

- **App Router at root** (`app/`), not `src/app/`, to avoid Next.js treating `src/pages/` as a Pages Router directory. `src/pages/*.tsx` = client-side page components (not Next.js router entries).
- **Page pattern**: `app/*/page.tsx` = server component that exports `metadata` + renders the corresponding `src/pages/*.tsx` client component as a child. This gives SSR for meta tags + text content in HTML while keeping framer-motion animations.
- **ProductPage** receives `id` as a prop from the server `app/products/[id]/page.tsx` (Next.js 15 style: `params` is a `Promise<{ id: string }>`).
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

## Dev server port

Script: `next dev -p ${PORT:-3000} -H 0.0.0.0` — PORT env var set by Replit.

## allowedDevOrigins

`next.config.ts` has `allowedDevOrigins: ['*']` to suppress cross-origin warning in the Replit proxy iframe.
