import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
export default defineConfig({
  base: '/taskflow-app/',
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
  },
  css: {
    postcss: './postcss.config.js',
  },
  base: '/', // Ensures correct asset paths for Vercel
});
