---
name: Next.js monorepo installs
description: Dependency installation behavior for Next.js artifacts inside the pnpm monorepo.
---

Install dependencies for a workspace artifact from the monorepo root using its pnpm workspace filter. Running the generic package helper without an artifact-aware working directory can target the root and fail the workspace-root check, leaving the managed workflow unable to resolve `next`.

**Why:** The artifact workflow resolves binaries from the workspace package's installed dependency graph, not from a manually assembled local `node_modules` directory.

**How to apply:** After changing an artifact's package.json, run the filtered workspace install from the repository root, then run the artifact's typecheck/build before restarting its managed workflow.