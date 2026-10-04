---
name: AfuCloud page theme
description: Product-specific visual direction for the AfuCloud page within the AfuChat website.
---

Use AfuChat's shared light/dark theme for the AfuCloud page background and readable foreground text. Keep AfuCloud's green logo and green accents/icons. Keep product sections and code examples free of cards; tint TypeScript and JSX code blocks green and cURL blocks red, with readable theme-aware text. Scope all shared-header/footer changes to this route. Replace the wide Products dropdown with a left-side product sidebar on desktop and a left drawer on smaller screens; other routes keep their existing dropdown.

**Why:** The user requested the shared AfuChat theme across both light and dark modes while retaining AfuCloud's identity and flat presentation, chose a left sidebar instead of the wide Products dropdown, and specified code-type color tints without cards.

**How to apply:** Reuse shared theme tokens for surfaces and body text, retain AfuCloud green for its logo and general accents, use a green tint for TypeScript/JSX and a red tint for cURL blocks, keep the product sidebar route-specific, and keep all AfuCloud styling from affecting other routes.