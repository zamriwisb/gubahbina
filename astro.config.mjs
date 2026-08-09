import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Domain sendiri di GitHub Pages: https://gubahbina.dev-aplikasiniaga.com
// Laman duduk di root domain, jadi tiada `base` — laluan dalaman kekal '/...'.
// Nilai ini memacu canonical URL, sitemap dan tag Open Graph.
//
// Domain disimpan dalam public/CNAME supaya ia kekal setiap kali workflow
// menyiarkan artifact baharu. Jika domain ditukar, kemas kini di sini, dalam
// public/CNAME, src/config/site.ts dan public/robots.txt.
//
// Jika laman perlu kembali ke sub-laluan (cth. project page), set semula
// `base` di bawah — withBase() dalam src/lib/paths.ts akan menyesuaikan
// setiap pautan dalaman dengan sendirinya.
const SITE = 'https://gubahbina.dev-aplikasiniaga.com';

export default defineConfig({
  site: SITE,
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
