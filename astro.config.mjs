import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages project page: https://zamriwisb.github.io/gubahbina/
// `site` is the origin only; `base` is the sub-path the repo is served from.
// Together they drive canonical URLs, the sitemap and Open Graph tags.
//
// Apabila klien menetapkan domain sendiri: tukar SITE kepada domain itu,
// buang BASE (atau set '/'), dan kemas kini src/config/site.ts serta
// public/robots.txt. Pautan dalaman tidak perlu diubah — withBase() dalam
// src/lib/paths.ts akan menyesuaikan diri dengan sendirinya.
const SITE = 'https://zamriwisb.github.io';
const BASE = '/gubahbina';

export default defineConfig({
  site: SITE,
  base: BASE,
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
