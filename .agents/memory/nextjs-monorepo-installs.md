---
name: Next.js monorepo installs
description: Dependency installation behavior for Next.js artifacts inside the pnpm monorepo.
---

Install dependencies for a workspace artifact from the monorepo root using its pnpm workspace filter. Running the generic package helper without an artifact-aware working directory can target the root and fail the workspace-root check, leaving the managed workflow unable to resolve `next`.

**Why:** The artifact workflow resolves binaries from the workspace package's installed dependency graph, not from a manually assembled local `node_modules` directory.

**How to apply:** After changing an artifact's package.json, run the filtered workspace install from the repository root, then run the artifact's typecheck/build before restarting its managed workflow.

If the filtered install is rejected by the Replit package firewall, an offline retry cannot recover a missing Next.js tarball; leave the lockfile unchanged and retry the filtered install after the registry issue is resolved rather than bypassing the firewall.

**Why:** A failed install can leave the workspace without the `next` binary even though package.json and the lockfile are valid, so the managed workflow fails before any application code is evaluated.

**How to apply:** Treat `next: not found` as a dependency-install/registry problem first. Do not replace the framework or point the project at an unapproved registry just to get a preview running.