/**
 * SSG pre-render script.
 * Run after `vite build` (client) and `vite build --ssr` (server bundle).
 * Writes a static index.html for every route into dist/public/.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const clientDir = path.resolve(root, 'dist/public');
const serverEntry = path.resolve(root, 'dist/server/entry-server.js');

const ROUTES = [
  '/',
  '/partners',
  '/products',
  '/products/afumail',
  '/products/afuchat',
  '/products/afuai',
  '/products/afucloud',
  '/products/afumovies',
  '/products/afumall',
  '/products/afunews',
  '/products/afublog',
  '/developers',
  '/about',
  '/about/leadership',
  '/about/careers',
  '/about/press',
  '/about/brand',
  '/enterprise',
  '/security',
  '/contact',
  '/help',
  '/legal/privacy',
  '/legal/terms',
  '/legal/cookies',
  '/sitemap',
  '/signup',
  '/login',
];

async function run() {
  const template = await fs.readFile(path.resolve(clientDir, 'index.html'), 'utf-8');
  const { render } = await import(serverEntry);

  let count = 0;
  for (const route of ROUTES) {
    try {
      const { html, head } = render(route);

      const page = template
        .replace('<!--app-head-->', head)
        .replace('<!--app-html-->', html);

      const filePath =
        route === '/'
          ? path.resolve(clientDir, 'index.html')
          : path.resolve(clientDir, route.replace(/^\//, ''), 'index.html');

      await fs.mkdir(path.dirname(filePath), { recursive: true });
      await fs.writeFile(filePath, page, 'utf-8');
      console.log(`  ✓  ${route}`);
      count++;
    } catch (err) {
      console.error(`  ✗  ${route}`, err.message);
    }
  }

  console.log(`\nPre-rendered ${count}/${ROUTES.length} pages → dist/public/\n`);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
