import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

const port = parseInt(process.env.PORT || '3000');
const basePath = process.env.BASE_PATH || '/';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      '@': path.join(import.meta.dirname, 'src'),
    },
  },
  base: basePath,
  server: {
    port,
    host: '0.0.0.0',
    allowedHosts: true,
    hmr: {
      clientPort: 443,
      protocol: 'wss',
    },
  },
});
