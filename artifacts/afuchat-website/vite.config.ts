import path from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

const port = parseInt(process.env.PORT || '3000');
const basePath = process.env.BASE_PATH || '/';

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
    ...(process.env.NODE_ENV !== 'production'
      ? [
          await import('@replit/vite-plugin-runtime-error-modal').then((m) =>
            m.default(),
          ),
          ...(process.env.REPL_ID !== undefined
            ? [
                await import('@replit/vite-plugin-cartographer').then((m) =>
                  m.cartographer({
                    root: path.resolve(import.meta.dirname, '..'),
                  }),
                ),
              ]
            : []),
        ]
      : []),
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
    },
    dedupe: ['react', 'react-dom'],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, 'dist/public'),
    emptyOutDir: true,
  },
  server: {
    port,
    strictPort: true,
    host: '0.0.0.0',
    allowedHosts: true,
    hmr: {
      clientPort: 443,
      protocol: 'wss',
    },
  },
  preview: {
    port,
    host: '0.0.0.0',
    allowedHosts: true,
  },
});
