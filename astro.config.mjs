import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
      configFile: './tailwind.config.mjs'
    }),
    mdx()
  ],
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover'
  },
  build: {
    inlineStylesheets: 'auto'
  },
  vite: {
    build: {
      minify: 'esbuild',
      cssMinify: true
    }
  }
});
