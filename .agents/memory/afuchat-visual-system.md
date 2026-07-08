---
name: AfuChat website visual system
description: Convention for when to use full character illustrations vs compact 3D product icons vs Lucide icons across the AfuChat corporate site, and how per-page distinctiveness is maintained.
---

Established a two-tier visual system per product (in `PRODUCT_DATA`, each entry has both `illustration` and `icon3d` fields):
- **Full gradient-blob character illustrations** (`illustration` field) are reserved for single, prominent showcase spots only: each product's own `ProductPage` hero, and site-level (non-per-product) section heroes (home hero, Products/Ecosystem page heroes, etc.).
- **Compact glossy 3D icon badges** (`icon3d` field) are used everywhere a product appears repeatedly in a list/grid/nav context: nav dropdown, footer links, home page product grids, Products/Ecosystem list rows, related-products blocks.
- Generic Lucide icons remain for non-product UI chrome (arrows, chevrons, menu/close, checkmarks).

**Why:** repeating the large character illustration in every dense list felt heavy and visually repetitive across pages; splitting responsibility (big illustration = "this page is about this one product", small 3D icon = "this product exists, here's a link to it") keeps each page's hero feeling distinct while list contexts stay clean.

**How to apply:** when adding a new product-bearing surface (new page, new nav entry, new footer column), default to `icon3d` unless the surface is a dedicated single-product hero, in which case use `illustration`. Also: `GenericPage.tsx`'s `PAGE_CONTENT` map assigns each page `type` its own accent color and gradient — when adding a new page type, pick an accent that isn't already used by a visually/thematically adjacent page (e.g. avoid reusing the same green for both "careers" and "press") so pages don't feel interchangeable.
