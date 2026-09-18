# AfuChat Technologies Website

The corporate website for **AfuChat Technologies**, a technology company building and operating a growing ecosystem of digital products and services.

The website presents the company, its products, development capabilities, partners, and ways to work with the team. AfuChat is one product within the wider ecosystem rather than the identity of the entire company.

## What this website covers

- Company overview and technology vision
- Product ecosystem and individual product pages
- Selected client and partner work
- Development and engineering services
- Developer resources and contact routes
- Company information, leadership, careers, press, and security
- Responsive experiences for desktop and mobile

## Product ecosystem

The website may present products including:

- **AfuChat** — social communication and community platform
- **AfuMail** — email platform
- **Engagera / AfuAI** — AI and developer-focused technology
- **AfuCloud** — cloud infrastructure and developer services
- **AfuMovies** — entertainment discovery

Product availability and development status can change as the ecosystem evolves.

## Technology

This website is built with a modern web stack centered around:

- Next.js
- React
- TypeScript
- Tailwind CSS
- pnpm
- Vercel

The application uses the Next.js App Router and keeps reusable layout, content, product, and visual components organized within the website application.

## Project structure

```text
Website/
├── artifacts/
│   └── afuchat-website/
│       ├── public/
│       │   ├── assets/
│       │   ├── illustrations/
│       │   └── partners/
│       ├── src/
│       │   ├── app/
│       │   ├── components/
│       │   ├── data/
│       │   └── views/
│       └── package.json
├── lib/
├── scripts/
├── supabase/
├── package.json
├── pnpm-workspace.yaml
└── vercel.json
```

## Local development

From the repository root:

```bash
pnpm install
```

Then run the website using the workspace command defined by the repository:

```bash
pnpm dev
```

For a production verification:

```bash
pnpm build
```

Use the workspace/application package scripts when a command needs to target only the website application.

## Design direction

The website follows a restrained corporate visual system with:

- Deep navy and blue as the primary visual language
- Cream and light neutral surfaces where appropriate
- Flat layouts with clear spacing and typography
- Purpose-built SVG artwork instead of generic stock illustrations
- Separate company and product branding
- Responsive layouts designed for both mobile and desktop

The ATL company mark is kept separate from individual product identities.

## Contributing

Development should follow the repository's branch and pull-request workflow. Changes intended for `main` should be developed on a dedicated branch, verified locally, reviewed through a pull request, and merged only after the relevant checks pass.

## Company

AfuChat Technologies builds digital products, infrastructure, and technology services under a broader ecosystem of independent products.

Website: https://afuchat.com

Contact: hello@afuchat.com
