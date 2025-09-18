import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  build: {
    outDir: 'public', // carpeta que Cloudflare Pages usará como output
    emptyOutDir: true
  },
  base: '/' // importante para rutas relativas
});
