# AfuChat Technologies Limited — Corporate Website

A production-ready multi-page corporate website for AfuChat Technologies Limited, built on a pnpm monorepo. The site presents AfuChat as a connected digital ecosystem anchored by AfuMail as the single identity provider across all products.

## Run & Operate

- `pnpm --filter @workspace/afuchat-website run dev` — run the website (port 18182, preview at `/`)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 8080, preview at `/api`)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)

## Required env vars

| Variable | Where used | Notes |
|---|---|---|
| `DATABASE_URL` | `lib/db` | Postgres connection string; used by Drizzle tooling (`db push`) and any DB-backed routes |
| `SUPABASE_URL` / `SUPABASE_ANON_KEY` | `artifacts/api-server` (`src/lib/supabase.ts`) | Read-only anon-key client for live AfuChat community/profile data; the API throws on startup of that path if missing |
| `SESSION_SECRET` | Reserved, not yet consumed by API code | Set for future session signing use |
| `PORT` | Both artifacts | Injected automatically by artifact.toml (18182 for web, 8080 for API) |
| `BASE_PATH` | `artifacts/afuchat-website` | Injected automatically by artifact.toml (`/` for web) |

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React 19 + Vite 7 + Tailwind CSS 4 + shadcn/ui
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/afuchat-website/` — React/Vite corporate website
  - `src/App.tsx` — router and top-level layout
  - `src/components/home/` — homepage section components
  - `src/components/layout/` — Navbar, Footer, Layout wrapper
  - `src/components/ui/` — shadcn/ui primitives
- `artifacts/api-server/` — Express 5 API server
  - `src/app.ts` — Express app setup, middleware, routes
  - `src/index.ts` — server entry point (reads `PORT`)
- `lib/db/` — Drizzle ORM schema and client
- `lib/api-spec/` — OpenAPI specification (source of truth for API contracts)
- `lib/api-zod/` — Zod schemas generated from OpenAPI spec
- `lib/api-client-react/` — React Query hooks generated from OpenAPI spec
- `attached_assets/` — logo, screenshots, and original design brief

## Architecture decisions

- **AfuMail as universal identity** — one account unlocks all AfuChat services; no per-product sign-ups.
- **Artifact.toml-injected env** — `PORT` and `BASE_PATH` are required and injected by artifact.toml for both dev and prod; the app throws on startup if missing (intentional, not a bug).
- **OpenAPI-first API** — `lib/api-spec` is the contract; client hooks and Zod schemas are generated, never hand-written.
- **Monorepo sharing** — `lib/` packages are workspace dependencies shared between frontend and backend.

## Product

AfuChat Technologies Limited's public-facing corporate site. Covers the product ecosystem (AfuChat, AfuMail, AfuAI, AfuCloud, AfuMovies, AfuMall, AfuNews, AfuBlog), developer platform, enterprise offering, and company pages (About, Careers, Press, Security, Legal).

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- `PORT` and `BASE_PATH` must be set before starting either artifact — the app throws intentionally if missing. Artifact.toml handles this automatically; set them manually when running outside Replit.
- Use `pnpm --filter` to target a specific package rather than running workspace-root scripts for individual services.
- API codegen must be re-run after any change to `lib/api-spec`.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
