/**
 * ============================================================================
 * SATU-SATUNYA TEMPAT UNTUK TUKAR MAKLUMAT PERNIAGAAN
 * Single source of truth for every business detail on this website.
 * ============================================================================
 *
 * Medan yang belum disahkan oleh klien ditetapkan sebagai `null`. Halaman
 * hanya memaparkan medan yang ada nilainya — tiada maklumat direka, dan
 * tiada nota "belum disahkan" dipaparkan kepada pelawat. Isikan nilai sebenar
 * di sini dan ia akan muncul dengan sendirinya.
 */

export const site = {
  /** Nama perniagaan mengikut logo yang dibekalkan klien. */
  name: 'Gubah Bina',

  /** Deskriptor yang dipaparkan di sebelah logo. */
  descriptor: 'Gabion Wall Specialist',

  /** Positioning line — disahkan dalam brief klien. Jangan ubah tanpa kebenaran. */
  tagline: 'Pakar Memasang Gabion Wall untuk Tebing, Cerun & Kawalan Hakisan',

  /**
   * URL awam penuh laman ini. Digunakan dalam JSON-LD dan sebagai sandaran
   * untuk canonical URL apabila `Astro.site` tiada.
   *
   * Buat masa ini laman disiarkan di GitHub Pages sebagai project page.
   * Apabila klien menetapkan domain sendiri, kemas kini di sini dan juga
   * dalam astro.config.mjs (SITE dan BASE) serta public/robots.txt.
   */
  url: 'https://zamriwisb.github.io/gubahbina',

  /** Kawasan perkhidmatan — disahkan: seluruh Malaysia. */
  serviceArea: 'Seluruh Malaysia',

  contact: {
    /**
     * 012-946 0622.
     * Klien membekalkan pautan pendek https://go.wasap.my/gabionwallspeacialist,
     * yang mengalih ke nombor ini. Kita guna wa.me terus supaya mesej yang
     * sudah tersusun (borang Hubungi) boleh dihantar bersama pautan; pautan
     * pendek tidak menjamin parameter teks itu sampai.
     */
    whatsappNumber: '60129460622',
    whatsappDisplay: '012-946 0622',

    /** Pautan pendek berjenama klien. Sama nombor; simpan untuk poster/bio. */
    whatsappShortLink: 'https://go.wasap.my/gabionwallspeacialist',

    /** Sama dengan nombor WhatsApp. */
    phoneNumber: '+60129460622',
    phoneDisplay: '012-946 0622',

    /**
     * Alamat e-mel perniagaan. Belum dibekalkan klien, jadi `null` — saluran
     * e-mel tidak dipaparkan langsung sehingga alamat sebenar diisi di sini.
     */
    email: null as string | null,

    /** Halaman Facebook rasmi. */
    facebook: 'https://www.facebook.com/gabionwallspecialist',

    /** Pejabat di Kota Bharu, Kelantan. */
    address: 'Lot 2091, Kampung Padang Kota, 15100 Kota Bharu, Kelantan',

    /**
     * Waktu operasi. Belum disahkan klien, jadi `null` — barisnya tidak
     * dipaparkan. Jangan nyatakan hari tertentu sehingga klien mengesahkannya.
     */
    hours: null as string | null,

    /**
     * Dijana daripada alamat yang disahkan. Ini adalah carian alamat, bukan
     * pin yang ditetapkan sendiri — jika klien mahu pin tepat di pintu masuk
     * tapak, minta pautan "Share > Embed a map" daripada Google Maps mereka
     * dan gantikan nilai ini.
     */
    mapEmbedUrl:
      'https://maps.google.com/maps?q=Gubah%20Bina%20Sdn%20Bhd%2C%20Kampung%20Padang%20Kota%2C%2015100%20Kota%20Bharu%2C%20Kelantan&z=14&output=embed' as
        | string
        | null,
  },
};

/** Mesej WhatsApp lalai. Diisi automatik dalam chat pelanggan. */
const DEFAULT_WA_MESSAGE =
  'Salam, saya berminat dengan pemasangan gabion wall. Boleh saya dapatkan sebut harga?';

/**
 * Bina pautan WhatsApp dengan mesej yang sudah diisi.
 * @param message Mesej khusus untuk konteks halaman/butang tertentu.
 */
export function waLink(message: string = DEFAULT_WA_MESSAGE): string {
  return `https://wa.me/${site.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { label: 'Utama', href: '/' },
  { label: 'Perkhidmatan', href: '/perkhidmatan/' },
  { label: 'Kelebihan', href: '/kelebihan-gabion-wall/' },
  { label: 'Projek', href: '/projek/' },
  { label: 'Soalan Lazim', href: '/faq/' },
  { label: 'Hubungi Kami', href: '/hubungi/' },
] as const;
