/**
 * ============================================================================
 * PAUTAN DALAMAN & LALUAN ASAS (base path)
 * Internal links and the deployment base path.
 * ============================================================================
 *
 * Laman ini disiarkan di GitHub Pages sebagai "project page", jadi ia duduk
 * di bawah sub-laluan /gubahbina/ dan bukan di root domain.
 *
 * Astro hanya menambah `base` pada laluan yang DIJANA olehnya — CSS, skrip,
 * dan imej melalui astro:assets. Setiap `href` yang kita tulis sendiri masih
 * menghala ke root domain melainkan dibalut dengan `withBase()`.
 *
 * Cara guna: tulis laluan secara root-absolute seperti biasa ('/faq/') dan
 * biarkan withBase() menambah awalan. Dengan itu nilai dalam `nav`
 * (src/config/site.ts) kekal bersih dan boleh dibandingkan tanpa mengambil
 * kira base.
 */

/** Nilai `base` daripada astro.config.mjs, cth. '/gubahbina/'. */
const BASE = import.meta.env.BASE_URL;

/** Buang '/' di hujung supaya cantuman laluan tidak menghasilkan '//'. */
const trimTrailing = (p: string) => p.replace(/\/+$/, '');

/**
 * Tambah base path pada laluan dalaman.
 *
 * Pautan luar (https:, tel:, mailto:, //) dan sauh dalam halaman (#) tidak
 * disentuh — ia bukan laluan laman ini.
 */
export function withBase(path: string): string {
  if (/^[a-z][a-z0-9+.-]*:/i.test(path) || path.startsWith('//')) return path;
  if (path.startsWith('#')) return path;
  return `${trimTrailing(BASE)}/${path.replace(/^\/+/, '')}`;
}

/**
 * Adakah halaman semasa sepadan dengan pautan nav ini?
 *
 * @param pathname `Astro.url.pathname` — sudah mengandungi base.
 * @param href     Laluan dalam `nav` — tidak mengandungi base.
 *
 * '/' sepadan dengan halaman utama sahaja. Laluan lain sepadan dengan dirinya
 * dan mana-mana halaman di bawahnya.
 */
export function isCurrentPath(pathname: string, href: string): boolean {
  const here = trimTrailing(pathname);
  const home = trimTrailing(withBase('/'));
  if (href === '/') return here === home;
  const target = trimTrailing(withBase(href));
  return here === target || here.startsWith(`${target}/`);
}
