# AfuChat Website

The official website for AfuChat and the wider AfuChat product ecosystem.

The website presents AfuChat products, product information, customer reviews, identity and security concepts, developer resources, and company navigation in one public-facing web experience.

## What this repository contains

This repository is a Next.js monorepo. The main website lives at:

`artifacts/afuchat-website/`

The repository also contains shared libraries, API specifications, supporting assets, project documentation, and a mockup sandbox used during development.

## Website

- Production domain: https://afuchat.com
- Framework: Next.js
- Language: TypeScript
- Package manager: pnpm
- React: managed through the workspace catalog
- Animation: Framer Motion
- Icons: Lucide React
- UI primitives: Radix UI
- Styling: Tailwind CSS

## Current website experience

The current homepage includes:

- Hero section introducing independent AfuChat products
- Product ecosystem overview
- Eight products with individual product routes
- Trustpilot customer review section
- AfuMail identity and ecosystem section
- Security and platform feature section
- Developer platform section
- Ecosystem call to action
- Site-wide footer with product, company, legal, Trustpilot, and Google Play links

## Product ecosystem

The website currently defines these products in the shared product data:

1. AfuMail
2. AfuChat
3. AfuAI
4. AfuCloud
5. AfuMovies
6. AfuMall
7. AfuNews
8. AfuBlog

Product information is centralized in:

`artifacts/afuchat-website/src/data/products.ts`

This keeps product names, descriptions, categories, routes, colors, icons, and illustrations consistent across the website.

## Project structure

```text
.
├── artifacts/
│   └── afuchat-website/
│       ├── public/
│       │   ├── assets/
│       │   └── illustrations/
│       ├── src/
│       │   ├── app/
│       │   ├── components/
│       │   ├── data/
│       │   ├── lib/
│       │   └── views/
│       ├── package.json
│       ├── next.config.ts
│       └── ...
├── lib/
│   ├── api-client-react/
│   ├── api-spec/
│   ├── api-zod/
│   └── db/
├── scripts/
├── attached_assets/
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
└── vercel.json
```

## Development

From the repository root:

```bash
pnpm install
```

Run the website locally:

```cd artifacts/afuchat-website
pnpm dev
```

The website development server runs on port 3000 by default.

## Build

Build the website from its application directory:

```cd artifacts/afuchat-website
pnpm build
```

Type-check the website:

```cd artifacts/afuchat-website
pnpm typecheck
```

Start the production build locally:

```cd artifacts/afuchat-website
pnpm start
```

## Deployment

The repository includes Vercel configuration for the Next.js website.

The website application is located at:

`artifacts/afuchat-website/`

The application uses Next.js's `.next` output for production builds.

When deploying through Vercel, make sure the deployment configuration matches the monorepo structure and uses the website application as the project root or executes the appropriate workspace build command from the repository root.

## Important implementation notes

### Product data

Product information should be updated through:

`artifacts/afuchat-website/src/data/products.ts`

Avoid duplicating product names and metadata throughout individual components when the shared product data can be used instead.

### Illustrations and assets

Website illustrations and visual assets are stored under the website's public assets directories and are imported through the illustration data module.

### Homepage composition

The homepage entry point is:

`artifacts/afuchat-website/src/app/page.tsx`

The main homepage view is:

`artifacts/afuchat-website/src/views/Home.tsx`

Homepage sections are separated into reusable components under:

`artifacts/afuchat-website/src/components/home/`

### Footer

The homepage and reviews experience use a shared footer pattern containing product navigation, company navigation, legal links, Trustpilot, and Google Play information.

## Design direction

The website is intended to represent a technology company and its growing product ecosystem.

The design direction emphasizes:

- Clear and readable typography
- Strong visual hierarchy
- Responsive layouts
- Rounded interactive controls
- Product-focused navigation
- Real website assets and illustrations
- Consistent AfuChat visual language
- Independent products that can also work together as an ecosystem

The company identity and individual product identities should remain visually distinct.

## Repository history

The current `main` branch is intentionally aligned with commit:

`c66c86de3d40d10179204858604e461cb3999994`

This commit represents the current baseline of the website.

## Status

This is an actively developed website. Product pages, developer resources, company sections, integrations, and other parts of the AfuChat ecosystem may continue to evolve independently of the homepage.

## License

Copyright © AfuChat Technologies Limited. All rights reserved.
