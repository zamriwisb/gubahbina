import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// PLACEHOLDER: replace with the client's real domain before deploying.
// This value is used for canonical URLs, the sitemap and Open Graph tags.
const SITE = 'https://www.example-gabionwall.com';

export default defineConfig({
  site: SITE,
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
