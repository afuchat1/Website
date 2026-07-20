---
name: Vite config env fallbacks
description: The scaffold vite.config throws on missing PORT/BASE_PATH; use fallbacks when artifact.toml has no [services.env] block.
---

The react-vite scaffold's generated `vite.config.ts` throws hard errors when `PORT` or `BASE_PATH` env vars are absent. This causes the workflow to fail on first start if the artifact's `artifact.toml` has no `[services.env]` block (which happens when a directory is manually populated rather than fully bootstrapped by `createArtifact`).

**Why:** The scaffold assumes the managed workflow always injects those vars. When an artifact's toml is minimal (no `[services.env]`), those vars are missing and the config crashes before Vite even starts.

**How to apply:** Replace the throwing pattern with graceful fallbacks:
```ts
const port = parseInt(process.env.PORT || '3000');
const basePath = process.env.BASE_PATH || '/';
```
This is safe because the workflow env still overrides these at runtime when present.
