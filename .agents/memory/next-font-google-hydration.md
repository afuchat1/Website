---
name: next-font-google-hydration
description: next/font/google causes React 19 hydration mismatch in Next.js 15 on Replit — use a direct <link> tag instead.
---

## Rule
Do NOT use `next/font/google` in Next.js 15 + React 19 projects running on Replit. Use a direct Google Fonts `<link>` tag instead.

**Why:**
`next/font/google` uses `useServerInsertedHTML` internally, which creates a Suspense boundary (B:0) in the server-rendered HTML. On Replit, this boundary resolves to an empty S:0 template. React 19's concurrent hydration reconciler expects different content at that Suspense boundary position during client hydration, producing a persistent "Hydration failed" error on every page load (visible as a red overlay in dev mode). The error appears on ALL pages sharing the layout — not just one component — because the fault is in the shared `layout.tsx`, not any page-level component.

**How to apply:**
1. Remove `import { Inter } from 'next/font/google'` and the font config from layout.tsx.
2. Replace with preconnect + stylesheet link tags in the `<head>`:
   ```tsx
   <link rel="preconnect" href="https://fonts.googleapis.com" />
   <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
   <link
     href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
     rel="stylesheet"
   />
   ```
3. In globals.css change `--font-sans: var(--font-inter), 'Inter', sans-serif` → `--font-sans: 'Inter', sans-serif`.
4. Add `suppressHydrationWarning` to `<html>` and `<body>` to handle any residual proxy-injected attribute differences.

**Diagnostic tip:**
The Replit browser console log capture truncates around 600 bytes. To see the full hydration error component stack: add a `window.addEventListener('error', ...)` + POST to `/api/dev-log` API route, or look at S:0 in the server HTML (empty S:0 = `useServerInsertedHTML` producing nothing = likely cause).

**Also fixed in the same session:**
- `Math.random()` inside `useMemo` with no deps in `sidebar.tsx` → replaced with stable fixed value (60%) to prevent server/client value divergence.
