# Prompt Gambar AI — Pengganti Sementara

Fail ini mengandungi prompt untuk menjana gambar sementara bagi **setiap ruang
gambar** dalam `SENARAI-BAHAN-KLIEN.md`, semasa menunggu gambar sebenar
daripada klien.

---

## ⚠️ Syarat penggunaan — baca dahulu

Website ini dibina atas satu prinsip: **tiada maklumat direka** (lihat Bahagian D
dalam `SENARAI-BAHAN-KLIEN.md`). Gambar AI yang dipaparkan seolah-olah projek
sebenar melanggar prinsip yang sama — malah lebih serius daripada nombor yang
tidak disahkan, kerana gambar lebih meyakinkan.

Oleh itu:

| Boleh | Tidak boleh |
|---|---|
| Draf dalaman untuk melihat susun atur | Naik ke pelayan awam / domain sebenar |
| Pratonton kepada klien untuk pilih sudut gambar | Dipaparkan tanpa label |
| Rujukan visual: "gambar begini yang kami perlukan" | Digunakan di Facebook atau iklan |

**Peraturan:**

1. Setiap gambar AI mesti berlabel jelas di atasnya — contoh:
   `ILUSTRASI AI — BUKAN PROJEK SEBENAR`.
2. Simpan dalam `src/assets/draft-ai/` (bukan `src/assets/`) supaya senang
   dibuang serentak.
3. `public/robots.txt` mesti kekal `Disallow: /` selagi gambar AI ada.
4. Buang **semua** gambar AI sebaik gambar sebenar diterima. Jangan biarkan
   walau satu tertinggal sebagai "pengisi".
5. Kegunaan paling berguna sebenarnya: **hantar gambar AI kepada klien** sebagai
   contoh sudut dan komposisi yang diperlukan. Ini selalunya lebih berkesan
   daripada penerangan bertulis.

---

## Cara guna prompt

Setiap prompt di bawah = **BASE + prompt khusus + NEGATIVE**.

Salin `BASE STYLE`, tampal prompt khusus, kemudian tambah `NEGATIVE`.

### BASE STYLE (guna untuk semua gambar)

```
Documentary construction photography, real DSLR photograph, natural daylight,
rural Kelantan Malaysia, tropical setting with banana plants, coconut palms and
dense green undergrowth, reddish laterite soil, humid hazy air, soft overcast
light, 35mm lens, deep focus, realistic textures, muted earth tone palette of
grey granite, olive green and warm brown, candid and unstaged, no text overlay.
```

### NEGATIVE (guna untuk semua gambar)

```
no watermark, no logo, no text, no signage, no captions, no people facing camera,
no distorted faces or hands, no dry stone wall without wire, no fine chicken wire,
no plastic mesh, no European or American landscape, no pine trees, no snow,
no desert, no CGI render look, no HDR oversaturation, no lens flare, no drone
fisheye distortion, no cartoon, no illustration.
```

### Definisi gabion (penting — kebanyakan model salah)

Jika hasil kelihatan seperti tembok batu biasa tanpa dawai, tambah baris ini:

```
Gabion structure defined precisely: rectangular galvanized steel wire mesh
baskets, roughly 1 metre cubes, thick double-twisted hexagonal wire, stacked in
neat horizontal courses, each basket densely hand-packed with angular grey
granite rock, internal bracing wires visible across the face, sharp straight
vertical edges between baskets.
```

### Nisbah gambar

| Kod | Nisbah | Midjourney |
|---|---|---|
| `F-01` | 16 : 9 | `--ar 16:9` |
| `P-01` – `P-06` | 4 : 3 | `--ar 4:3` |
| `G-01a` – `G-03b` | 4 : 3 | `--ar 4:3` |

> Ruang `G-*b` di Halaman Utama menggunakan 3 : 2. Jana pada 4 : 3, pemotongan
> berlaku secara automatik.

---

## BAHAGIAN B-1 — Gambar utama halaman depan

### `F-01` — Hero (16 : 9, 2000px)

```
Wide landscape view of a completed gabion retaining wall running along a rural
riverbank in Kelantan, Malaysia. The wall stands about 3 metres tall in three
stacked courses of wire mesh baskets filled with grey granite rock, curving
gently with the river bend and receding into the distance. Calm brown river
water on the left, grass verge and a dirt access track on the right, tall
tropical trees behind. Late morning, soft diffused sunlight, long clear view
showing both the full length of the wall and the surrounding land. Empty of
people. Clean, tidy, well-built appearance.
```

**Nota:** gambar ini berada di belakang tajuk putih. Pilih hasil yang bahagian
atasnya agak gelap atau seragam supaya teks kekal terbaca. Elakkan langit terang
memenuhi separuh atas.

---

## BAHAGIAN B-2 — Gambar perkhidmatan (semua 4 : 3, 1400px)

### `P-01` — Pemasangan Gabion Wall (kerja sedang berjalan)

```
Two Malaysian construction workers in long-sleeve shirts, work gloves and safety
helmets, seen from the side and behind, hand-packing angular grey granite rocks
into an open galvanized wire mesh gabion basket at a work site. A partially
filled row of baskets extends beside them, empty folded mesh panels and a pile
of loose rock in the foreground. Wire ties and pliers on the ground. Mid-morning,
working daylight, dust in the air. Documentary work-in-progress feel, faces not
visible.
```

### `P-02` — Perlindungan Tebing (siap)

```
A completed gabion revetment protecting the bank of a small tropical river or
monsoon drain. Stepped courses of rock-filled wire baskets follow the water's
edge, the lowest course meeting the waterline. Clear brown water flowing past,
lush green vegetation growing over the top of the structure, tropical trees
behind. Viewed from the opposite bank at a slight angle to show both the length
of the structure and the water it protects. Settled and established, not newly
built.
```

### `P-03` — Kawalan Hakisan (SEBELUM pembaikan)

```
An eroded, unprotected earth slope in rural Malaysia, showing clear damage:
exposed reddish laterite soil, deep vertical rain gullies cut into the face,
undercut overhang at the base, tree roots hanging exposed, collapsed clumps of
soil at the foot. Patchy grass clinging to the top edge. No structure of any
kind present. Overcast light, damp ground after rain. Plain honest documentation
of a problem.
```

### `P-04` — Pengukuhan Cerun (siap, diambil dari bawah)

```
Low camera angle looking up at a tall terraced gabion retaining structure on a
hillside, four or five stepped courses of rock-filled wire mesh baskets rising
above the viewer, each course set slightly back from the one below. Grass and
tropical shrubs growing on the narrow terraces between courses. Sky visible at
the top of the frame to emphasise height. Bright but diffused daylight,
worm's-eye perspective, sense of scale and mass.
```

### `P-05` — Tembok Penahan Batu (siap, sudut menunjukkan ketinggian)

```
A completed gabion retaining wall photographed from a three-quarter angle,
showing both its full face and its receding length. Two metres tall, level
top course, ground level clearly higher behind the wall than in front of it.
Neat compacted earth and grass above, a strip of gravel and a shallow drain at
the foot. Rural Malaysian setting, a house roof partly visible behind the trees.
Afternoon light raking across the rock face to bring out texture and depth.
```

### `P-06` — Kerja Saliran & Pengukuhan Tapak (SEBELUM gabion dipasang)

```
Site preparation work in progress before gabion installation: a freshly
excavated trench with clean straight sides cut into reddish soil, black
geotextile fabric laid and folded along the base, compacted crushed stone
levelled inside the trench, a small excavator parked at the edge of the frame,
wooden level pegs with string lines set along the alignment. Wet ground, tropical
vegetation at the edges. No gabion baskets yet. Practical, unglamorous
work-site documentation.
```

---

## BAHAGIAN B-3 — Galeri sebelum & selepas (semua 4 : 3, 1400px)

### ⚠️ Kaedah untuk pasangan sebelum/selepas

Ini bahagian paling sukar. Jika kedua-dua gambar dijana secara berasingan,
lokasinya akan kelihatan berbeza dan pasangan itu hilang kesannya.

**Kaedah yang betul:**

1. Jana gambar **SEBELUM** dahulu sehingga puas hati.
2. Guna fungsi **edit / image-to-image / inpaint** pada gambar yang sama —
   jangan jana gambar baharu.
3. Prompt edit: *"Keep the background, trees, sky, camera angle and lighting
   exactly the same. Replace only the eroded slope with a completed stacked
   gabion wall of rock-filled wire mesh baskets."*
4. Model yang sesuai untuk kerja ini: Nano Banana (Gemini), Flux Kontext, atau
   ciri *Inpaint* dalam Midjourney.

### `G-01a` — Perlindungan tebing, SEBELUM

```
A damaged, unprotected river bank in rural Kelantan seen from the opposite side.
The bank has collapsed into the water leaving a raw vertical scar of exposed
reddish soil about two metres high, undercut at the waterline, with a leaning
tree at the top edge and its roots hanging free. Brown river water in the
foreground, dense tropical vegetation behind. Wide framing showing the full
extent of the damaged section and the land above it. Flat overcast light.
```

### `G-01b` — Perlindungan tebing, SELEPAS

```
Same river bank, same viewpoint, same trees, same sky and lighting as the
previous image. The collapsed scar is now fully rebuilt as a completed gabion
revetment: stepped courses of galvanized wire mesh baskets packed with grey
granite rock, following the line of the bank, lowest course meeting the water.
The leaning tree at the top edge remains in place. Everything else in the frame
unchanged.
```

### `G-02a` — Pengukuhan cerun, SEBELUM

```
A failing earth slope beside a rural road in Malaysia. The slope face is bare
reddish laterite, scarred with erosion gullies, with a fresh slip near the top
where soil has slumped away and spilled onto the shoulder of the road below.
Cracked asphalt edge, orange plastic barriers standing to one side. Tropical
trees along the crest. Grey overcast sky, damp ground.
```

### `G-02b` — Pengukuhan cerun, SELEPAS

```
Same slope, same road, same viewpoint, same trees and sky as the previous image.
The bare eroded face is now a completed terraced gabion structure: four stepped
courses of rock-filled wire mesh baskets rising up the slope, each set back from
the one below, grass established on the terraces. The road shoulder is clean and
the barriers are gone. Everything else in the frame unchanged.
```

### `G-03a` — Tembok penahan, SEBELUM

```
A rural Malaysian house compound where the ground drops away sharply at one
edge, about two metres of raw unsupported earth with soil crumbling at the lip
and a shallow rain gully cutting down the face. Loose stones and weeds at the
foot. A wooden fence post leaning at the top edge. Coconut palms and a house
wall visible behind. Bright hazy daylight.
```

### `G-03b` — Tembok penahan, SELEPAS

```
Same compound, same viewpoint, same house, same palms and lighting as the
previous image. The raw earth drop is now held by a completed gabion retaining
wall, two metres tall, level top course of rock-filled wire mesh baskets, with
neat compacted ground and new grass behind it and a gravel strip at the foot.
The fence post at the top edge now stands straight. Everything else in the frame
unchanged.
```

---

## Selepas gambar dijana

1. **Semak realisme.** Buang mana-mana hasil yang menunjukkan tangan cacat,
   mesh yang terapung tanpa sokongan, atau batu yang kelihatan seperti span.
   Gambar palsu yang jelas lebih merosakkan daripada ruang kosong.
2. **Ubah saiz** kepada lebar yang ditetapkan (2000px untuk `F-01`, 1400px untuk
   selebihnya) dan tukar kepada WebP.
3. **Nama fail** ikut kod rujukan: `F-01-ai.webp`, `P-01-ai.webp`,
   `G-01a-ai.webp`. Akhiran `-ai` memudahkan carian dan pembuangan kemudian.
4. **Letak dalam** `src/assets/draft-ai/`.
5. **Kekalkan label.** Jangan gantikan `<PhotoSlot />` terus dengan `<Image />`.
   Sebaliknya balut gambar dengan label "ILUSTRASI AI" yang kekal kelihatan,
   supaya tiada sesiapa tersilap anggap ia siap.

## Sebaik gambar sebenar diterima

```
rm -rf src/assets/draft-ai/
```

Kemudian ikut langkah "Untuk pembangun" dalam `SENARAI-BAHAN-KLIEN.md`.
