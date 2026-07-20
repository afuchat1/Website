# AfuChat Technologies Limited — Corporate Website

A production-ready multi-page corporate website for AfuChat Technologies Limited, built on a pnpm monorepo. Deployed to Vercel at `https://afuchat.com`. The site presents AfuChat's eight independent products (AfuMail, AfuChat, AfuAI, AfuCloud, AfuMovies, AfuMall, AfuNews, AfuBlog) as standalone tools that also work great together.

## Run & Operate

- `pnpm --filter @workspace/afuchat-website run dev` — run the website (Next.js, preview at `/`)
- `pnpm --filter @workspace/afuchat-website run typecheck` — typecheck the website
- `pnpm --filter @workspace/afuchat-website run build` — production build (what Vercel runs)

## Stack

- pnpm workspaces, Node.js, TypeScript
- **Next.js 15 (App Router)**, React 19, Tailwind CSS 4, shadcn/ui, Framer Motion
- **Supabase** — the only backend, ever. Queried directly from client components via a public anon key (gated by Row Level Security, safe to ship in the client bundle) in `src/lib/supabase.ts`. No env var needed for it, no custom API server, no other backend.
- Hosting: Vercel

## Where things live

- `artifacts/afuchat-website/` — the entire product (Next.js site)
  - `src/app/` — App Router route segments; each `page.tsx` is a thin server component (metadata + render a view)
  - `src/views/` — client (`'use client'`) page components with the actual UI/logic
  - `src/components/home/` — homepage section components
  - `src/components/layout/` — Navbar, Footer
  - `src/components/ui/` — shadcn/ui primitives (only ones actually used)
  - `src/data/` — static content: `products.ts`, `illustrations.ts`, `trustpilot.ts`
  - `src/lib/supabase.ts` — the single Supabase client instance
  - `public/illustrations/` — the only folder for illustration/background images
  - `public/assets/` — logo, app store badges, Trustpilot logo
  - `public/sitemap.xml`, `public/robots.txt` — manually maintained; domain is `afuchat.com`
  - `README.md` — full dev-facing setup and conventions doc
- `attached_assets/` — logo, screenshots, and original design brief

## Architecture decisions

- **Supabase only, no backend of its own.** Never add a custom API server or server-side API routes for this site.
- **App Router split**: `src/app/*/page.tsx` (server, metadata only) → `src/views/*.tsx` (client, actual page).
- **Domain is `afuchat.com`** — must stay consistent across `metadataBase`, `sitemap.xml`, `robots.txt`, and every page's canonical URL.
- **Images unoptimized** (`next.config.ts` → `images.unoptimized: true`) — plain `<img>` tags, no `next/image` pipeline.
- **AfuMail as universal identity** — one account unlocks all AfuChat services; no per-product sign-ups.

## Product

AfuChat Technologies Limited's public-facing corporate site. Covers the product ecosystem (AfuChat, AfuMail, AfuAI, AfuCloud, AfuMovies, AfuMall, AfuNews, AfuBlog), developer platform, enterprise offering, and company pages (About, Careers, Press, Security, Legal).

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- If the preview looks visually broken (missing styles, giant/misplaced images) right after a dependency or config change, it's almost always a stale `.next` cache — delete `artifacts/afuchat-website/.next` and restart the workflow.
- Keep `public/illustrations/` as the only home for illustration/background assets.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
- See `artifacts/afuchat-website/README.md` for the full setup/conventions doc.
