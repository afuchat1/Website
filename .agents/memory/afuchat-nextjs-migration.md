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
