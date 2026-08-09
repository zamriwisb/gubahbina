# Senarai Bahan Diperlukan daripada Klien

Website ini sudah siap dibina. Yang tinggal hanyalah **bahan sebenar** daripada
pemilik perniagaan.

Setiap ruang gambar di website menunjukkan kod rujukan (contoh: `F-01`). Cari
kod yang sama dalam senarai ini untuk tahu gambar apa yang diperlukan.

Semua maklumat perhubungan ditukar di **satu tempat sahaja**:
`src/config/site.ts`. Cari perkataan `PLACEHOLDER` dalam fail tersebut.

> **Gambar sementara:** `PROMPT-GAMBAR-AI.md` mengandungi prompt AI bagi setiap
> kod gambar di bawah. Gambar itu untuk **draf dalaman dan contoh sudut gambar
> kepada klien sahaja** — tidak boleh naik ke pelayan awam. Lihat syarat
> penggunaan di awal fail tersebut.

---

## BAHAGIAN A — Maklumat perniagaan (paling penting)

Tanpa maklumat ini, website tidak boleh dilancarkan.

| Kod | Perkara | Keterangan | Status |
|---|---|---|---|
| A-01 | **Nama penuh perniagaan** | **Gubah Bina.** Google Maps menyenaraikan "Gubah Bina Sdn Bhd" — sila sahkan sama ada mahu "Sdn Bhd" dipaparkan. Buat masa ini website hanya tulis "Gubah Bina". | ✅ Diterima |
| A-02 | **Nombor WhatsApp** | **012-946 0622.** Pautan pendek `go.wasap.my/gabionwallspeacialist` mengarah ke nombor yang sama. | ✅ Diterima |
| A-03 | **Nombor telefon** | **012-946 0622** (sama dengan WhatsApp). | ✅ Diterima |
| A-04 | **Alamat e-mel** | E-mel perniagaan untuk pertanyaan rasmi. | ⬜ Belum |
| A-05 | **Pautan Facebook** | **facebook.com/gabionwallspecialist** | ✅ Diterima |
| A-06 | **Waktu operasi** | Contoh: Isnin–Sabtu, 8:00 pagi – 6:00 petang. | ⬜ Belum |
| A-07 | **Alamat perniagaan** | **Lot 2091, Kampung Padang Kota, 15100 Kota Bharu, Kelantan.** | ✅ Diterima |
| A-08 | **Nama domain** | Contoh: `www.namasyarikat.com`. Perlu dikemas kini dalam `astro.config.mjs`, `src/config/site.ts` dan `public/robots.txt`. | ⬜ Belum |
| A-09 | **Logo** | PNG lutsinar diterima (`gb-1.png`, 326×255). **Versi vektor (SVG/AI/EPS) masih diperlukan** — pada saiz header, perkataan "Gubah Bina" dalam logo asal hanya ~10px tinggi dan menjadi kabur, jadi buat masa ini kami guna lambang "gb" sahaja bersama teks "Gabion Wall Specialist". Dengan fail vektor, logo penuh boleh dipaparkan dengan tajam. | 🟡 Separa |

---

## BAHAGIAN B — Gambar wajib

> **Sudah diisi:** lima gambar daripada halaman Facebook Gubah Bina, ditambah
> enam gambar galeri projek (tiga pasangan sebelum/selepas).
>
> ⚠️ **Enam gambar galeri projek itu ialah imej janaan AI**, bukan foto tapak
> Gubah Bina. Ia dipaparkan **tanpa label** atas arahan pemilik projek. Ini
> bercanggah dengan Bahagian D di bawah dan dengan syarat penggunaan dalam
> `PROMPT-GAMBAR-AI.md` — dicatat di sini supaya keputusan itu kekal jelas dan
> boleh disemak semula. **Ganti dengan foto sebenar sebaik ia diterima.**

### B-1. Gambar utama halaman depan

| Kod | Lokasi di website | Gambar yang diperlukan | Saiz min. | Status |
|---|---|---|---|---|
| `F-01` | Halaman Utama — bahagian paling atas | Struktur gabion wall yang telah siap dipasang di tapak sebenar. Ambil secara **landskap (melintang)**, waktu siang, dari jarak yang menunjukkan **keseluruhan dinding dan kawasan sekelilingnya**. Ini gambar pertama yang dilihat pelanggan — pilih kerja yang paling kemas. | 2000px | 🟡 Sementara — guna gambar jengkaut Gubah Bina di atas tembok gabion. **Hanya 1280px**, jauh di bawah minimum, jadi ia diregangkan pada skrin besar. Fail asal daripada telefon (bukan salinan Facebook) akan terus menyelesaikan masalah ini. |

### B-2. Gambar perkhidmatan

Halaman **Perkhidmatan** — satu gambar bagi setiap jenis kerja.

| Kod | Perkhidmatan | Gambar yang diperlukan | Saiz min. | Status |
|---|---|---|---|---|
| `P-01` | Pemasangan Gabion Wall | Kerja pemasangan **sedang berjalan** — sangkar mesh sedang diisi batu oleh pekerja di tapak. | 1400px | 🟡 Diisi — kerja pemasangan tepi sungai sedang berjalan (2048px). Gambar dekat **pekerja mengisi batu dengan tangan** masih lebih baik. |
| `P-02` | Perlindungan Tebing | Tebing sungai atau longkang yang **telah siap** dilindungi dengan struktur gabion. | 1400px | ✅ Diterima |
| `P-03` | Kawalan Hakisan | Kawasan yang mengalami hakisan **sebelum** kerja pembaikan dijalankan. | 1400px | ⬜ **Belum** — tiada gambar "sebelum" dalam bahan yang diterima. |
| `P-04` | Pengukuhan Cerun | Cerun yang telah diperkukuh dengan gabion bertingkat, diambil **dari bawah** supaya ketinggiannya kelihatan. | 1400px | ✅ Diterima (1280px) |
| `P-05` | Tembok Penahan Batu | Tembok penahan gabion yang telah siap, dari sudut yang menunjukkan ketinggiannya. | 1400px | ✅ Diterima (1280px) |
| `P-06` | Kerja Saliran & Pengukuhan Tapak | Kerja saliran atau penyediaan tapak **sebelum** struktur gabion dipasang. | 1400px | ⬜ **Belum** — tiada gambar penyediaan tapak sebelum gabion dipasang. |

### B-3. Galeri projek — gambar sebelum & selepas

Halaman **Projek** dan bahagian projek di Halaman Utama.

**Penting:** gambar "sebelum" dan "selepas" mesti diambil dari **sudut yang
sama** supaya perbezaannya jelas. Ini jenis gambar yang paling meyakinkan
pelanggan.

> **Semua ruang di bawah kini diisi dengan imej janaan AI**, kerana tiada satu
> pun gambar "sebelum" dalam bahan sebenar yang diterima setakat ini. Foto
> tapak sebenar masih **keutamaan nombor satu**. Jika pemilik ada gambar lama
> tapak sebelum kerja bermula — walaupun dari telefon lama atau daripada mesej
> WhatsApp pelanggan — ia amat berguna.
>
> Selain gambar, butiran setiap projek (`C-01`) juga masih diperlukan. Buat
> masa ini medan **Lokasi** pada setiap kad kekal "Akan dinyatakan pada projek
> sebenar", dan medan Masalah/Penyelesaian hanya menerangkan jenis kerja secara
> am — bukan projek tertentu.

| Kod | Projek | Gambar | Saiz minimum | Status |
|---|---|---|---|---|
| `G-01a` | Perlindungan tebing | **SEBELUM** — tebing yang terhakis, dari jarak yang menunjukkan keseluruhan kawasan. | 1400px | 🟡 Imej AI |
| `G-01b` | Perlindungan tebing | **SELEPAS** — tebing yang sama selepas gabion dipasang, dari sudut yang sama. | 1400px | 🟡 Imej AI |
| `G-02a` | Pengukuhan cerun | **SEBELUM** — cerun bermasalah sebelum kerja bermula. | 1400px | 🟡 Imej AI |
| `G-02b` | Pengukuhan cerun | **SELEPAS** — cerun yang sama selepas gabion bertingkat siap. | 1400px | 🟡 Imej AI |
| `G-03a` | Tembok penahan | **SEBELUM** — kawasan beza aras sebelum tembok dibina. | 1400px | 🟡 Imej AI |
| `G-03b` | Tembok penahan | **SELEPAS** — tembok penahan gabion yang telah siap. | 1400px | 🟡 Imej AI |

> **Nota fail:** dalam `src/assets/kerja/`, gunakan akhiran `-sebelum` dan
> `-selepas`. Pasangan tembok penahan asalnya dibekalkan dengan nombor
> **terbalik** (`-1` = selepas, `-2` = sebelum), jadi penomboran tidak boleh
> dipercayai sebagai penunjuk urutan.

> Jika ada lebih daripada 3 projek, hantar semuanya. Kami akan tambah ruang.
> Lebih banyak pasangan sebelum/selepas, lebih kuat halaman Projek.

### B-4. Peta

| Kod | Perkara | Keterangan |
|---|---|---|
| `M-01` | Peta Google Maps | Diperlukan alamat perniagaan atau pin lokasi. Setelah diterima, peta akan dipaparkan di halaman Hubungi. Kini ruang tersebut menunjukkan nota "Peta belum ditetapkan". |

---

## BAHAGIAN C — Bahan tambahan (tidak wajib, tetapi berguna)

| Kod | Perkara | Kenapa ia berguna |
|---|---|---|
| C-01 | **Butiran projek** | Lokasi (jika pemilik tapak beri kebenaran), jenis masalah, dan penyelesaian yang digunakan bagi setiap projek. Halaman Projek sudah ada ruang untuk maklumat ini. |
| C-02 | **Testimoni pelanggan** | Ulasan sebenar daripada pelanggan yang berpuas hati, dengan kebenaran untuk disiarkan. |
| C-03 | **Video kerja di tapak** | Video pendek proses pemasangan. Sangat berkesan untuk Facebook dan halaman utama. |
| C-04 | **Warna jenama** | Jika ada warna rasmi syarikat. Kini website menggunakan warna bumi (batu, olive, kelabu gelap) seperti yang diminta dalam brief. |
| C-05 | **Senarai negeri/daerah utama** | Jika ada kawasan tertentu yang paling kerap dilayani, kami boleh bina halaman SEO khusus untuk kawasan tersebut. |

---

## BAHAGIAN D — Perkara yang SENGAJA TIDAK dimasukkan

Perkara berikut **tidak** dipaparkan di website kerana ia belum disahkan.
Ia tidak akan direka-reka. Beritahu kami jika mana-mana daripadanya boleh
disahkan, dan kami akan tambah.

- ❌ Bilangan projek yang telah siap (contoh: "100+ projek")
- ❌ Tahun pengalaman
- ❌ Sijil, lesen CIDB, atau kelulusan kerajaan
- ❌ Logo atau nama pelanggan terdahulu
- ❌ Testimoni
- ❌ Harga atau anggaran kos
- ❌ Jaminan atau waranti

Sebabnya: brief klien menetapkan supaya tiada maklumat direka. Kepercayaan
pelanggan dibina melalui penerangan yang jelas dan gambar kerja sebenar,
bukan nombor yang tidak boleh disahkan.

---

## Cara menghantar bahan

1. **Gambar** — hantar fail asal daripada telefon atau kamera. Jangan hantar
   melalui WhatsApp jika boleh, kerana WhatsApp mengecilkan saiz gambar.
   Gunakan Google Drive, WeTransfer, atau e-mel.
2. **Maklumat perniagaan** (Bahagian A) — boleh dihantar melalui mesej biasa.
3. Setelah semua bahan Bahagian A dan B diterima, website boleh dilancarkan.

---

## Untuk pembangun: selepas bahan diterima

1. Kemas kini semua nilai `PLACEHOLDER` dalam `src/config/site.ts`.
2. Letak gambar dalam `src/assets/kerja/` dan hantar ke `<PhotoSlot />` melalui
   prop `src` dan `alt`. Ruang yang tiada `src` kekal bertanda secara automatik,
   jadi kedua-dua keadaan boleh wujud serentak semasa bahan masuk berperingkat.
3. Kemas kini domain dalam `astro.config.mjs` dan `public/robots.txt`.
4. **Buang baris `Disallow: /` dalam `public/robots.txt`.** Ia ada di situ
   supaya enjin carian tidak mengindeks nombor telefon dan alamat placeholder
   jika website ini dinaikkan ke pelayan awam sebelum bahan lengkap.
5. Setelah `whatsappNumber` bukan lagi `60000000000`, jalur amaran "Versi draf"
   di bahagian atas setiap halaman akan hilang secara automatik. Begitu juga
   pautan Facebook akan bertukar menjadi pautan sebenar setelah URL diisi.
6. ~~Buang label "Contoh susunan — bukan projek sebenar" pada kad projek~~ —
   sudah dibuang bersama notis galeri kosong semasa galeri projek diisi.
7. Ganti enam imej AI dalam galeri projek dengan foto tapak sebenar sebaik ia
   diterima, dan kemas kini `alt` dalam `src/data/content.ts` supaya menepati
   gambar baharu.
8. Jalankan `npm run build` dan sahkan tiada ruang placeholder yang tertinggal.
