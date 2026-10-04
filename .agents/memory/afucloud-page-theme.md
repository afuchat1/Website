---
name: AfuCloud page theme
description: Product-specific visual direction for the AfuCloud page within the AfuChat website.
---

Use AfuChat's shared light/dark theme for the AfuCloud page background and readable foreground text. Keep AfuCloud's green logo and green accents/icons. Keep ordinary product sections flat and borderless; code examples are the exception and should use theme-aware cards, tinted code blocks, and clear language labels. Scope all shared-header/footer changes to this route. Replace the wide Products dropdown with a left-side product sidebar on desktop and a left drawer on smaller screens; other routes keep their existing dropdown.

**Why:** The user requested the shared AfuChat theme across both light and dark modes while retaining AfuCloud's identity and flat presentation, chose a left sidebar instead of the wide Products dropdown, and then requested more visible code examples.

**How to apply:** Reuse the shared theme tokens for surfaces and body text, retain AfuCloud green for its logo and accent UI, keep code-card styling limited to the examples, keep the product sidebar route-specific, and keep all route-specific styling from affecting the rest of the website.