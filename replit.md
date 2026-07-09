# AfuChat Technologies Limited — Corporate Website

A production-ready multi-page corporate website for AfuChat Technologies Limited, built on a pnpm monorepo. Deployed to Vercel at `https://afuchat.com`. The site presents AfuChat's eight independent products (AfuMail, AfuChat, AfuAI, AfuCloud, AfuMovies, AfuMall, AfuNews, AfuBlog) as standalone tools that also work great together.

## Run & Operate

- `pnpm --filter @workspace/afuchat-website run dev` — run the website (Next.js, preview at `/`)
- `pnpm --filter @workspace/afuchat-website run typecheck` — typecheck the website
- `pnpm --filter @workspace/afuchat-website run build` — production build (what Vercel runs)

## Required env vars / secrets

| Variable | Where used | Notes |
|---|---|---|
| `SESSION_SECRET` | Reserved, not currently consumed by any code | Present as an environment secret for future use |
| `PORT` | `artifacts/afuchat-website` | Injected automatically by artifact.toml |

Supabase connects with a public anon key hardcoded in `src/lib/supabase.ts` — intentional, since it's gated by Row Level Security and safe to ship in the client bundle. It is not a secret and does not need an env var.

## Stack

- pnpm workspaces, Node.js, TypeScript
- **Next.js 15 (App Router)**, React 19, Tailwind CSS 4, shadcn/ui, Framer Motion
- **Supabase** — the only backend; queried directly from client components (no custom API server)
- Hosting: Vercel

## Where things live

- `artifacts/afuchat-website/` — the entire product (Next.js site)
  - `src/app/` — App Router route segments; each `page.tsx` is a thin server component (metadata + render a view)
  - `src/views/` — client (`'use client'`) page components with the actual UI/logic
  - `src/components/home/` — homepage section components
  - `src/components/layout/` — Navbar, Footer
  - `src/components/ui/` — shadcn/ui primitives (only ones actually used — dead ones get pruned)
  - `src/data/` — static content: `products.ts`, `illustrations.ts`, `trustpilot.ts`
  - `src/lib/supabase.ts` — the single Supabase client instance
  - `public/illustrations/` — the only folder for illustration/background images
  - `public/assets/` — logo, app store badges, Trustpilot logo
  - `public/sitemap.xml`, `public/robots.txt` — manually maintained; domain must be `afuchat.com`
  - `README.md` — full dev-facing setup and conventions doc; read before restructuring anything
- `attached_assets/` — logo, screenshots, and original design brief

## Architecture decisions

- **No backend of its own.** Supabase (anon key + RLS) is the only data layer. A previous `artifacts/api-server` (Express) existed unused and was deleted — do not recreate a custom API for this site.
- **App Router split**: `src/app/*/page.tsx` (server, metadata only) → `src/views/*.tsx` (client, actual page). Keeps SSR meta tags while still allowing client-side animation/state.
- **Domain is `afuchat.com`** (not `web.afuchat.com`) — must stay consistent across `metadataBase`, `sitemap.xml`, `robots.txt`, and every page's canonical URL.
- **Images unoptimized** (`next.config.ts` → `images.unoptimized: true`) — plain `<img>` tags, no `next/image` pipeline, by deliberate choice from the original Vite migration.
- **AfuMail as universal identity** — one account unlocks all AfuChat services; no per-product sign-ups.

## Product

AfuChat Technologies Limited's public-facing corporate site. Covers the product ecosystem (AfuChat, AfuMail, AfuAI, AfuCloud, AfuMovies, AfuMall, AfuNews, AfuBlog), developer platform, enterprise offering, and company pages (About, Careers, Press, Security, Legal).

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- If the preview looks visually broken (missing styles, giant/misplaced images) right after a dependency or config change, it's almost always a stale `.next` cache — delete `artifacts/afuchat-website/.next` and restart the workflow before assuming the code is wrong.
- Don't add server-side API routes (`src/app/api/**`) or a standalone backend — this site is Supabase-only by design.
- Keep `public/illustrations/` as the only home for illustration/background assets; images dropped elsewhere in `public/` tend to go stale and get cleaned up.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
- See `artifacts/afuchat-website/README.md` for the full setup/conventions doc devs should read before making structural changes.
