import type { ImageMetadata } from 'astro';
import type { FaqItem, IconName } from '../types';

/**
 * Gambar kerja sebenar daripada klien (halaman Facebook Gubah Bina).
 * Hanya gambar yang benar-benar menunjukkan kerja yang dinyatakan digunakan.
 */
import fotoPemasangan from '../assets/kerja/pemasangan-gabion-tepi-sungai.jpg';
import fotoTebing from '../assets/kerja/perlindungan-tebing-sungai.jpg';
import fotoHakisan from '../assets/kerja/kawalan-hakisan-tebing-terhakis.jpeg';
import fotoCerun from '../assets/kerja/pengukuhan-cerun-bertingkat.jpg';
import fotoTembok from '../assets/kerja/tembok-penahan-tepi-jalan.jpg';
import fotoSaliran from '../assets/kerja/kerja-saliran-parit-batu.jpeg';

/**
 * Pasangan sebelum/selepas bagi galeri projek (G-01 hingga G-03).
 *
 * Nama fail sengaja menyebut "sebelum"/"selepas" dan bukan "1"/"2": pasangan
 * tembok penahan dibekalkan dengan nombor terbalik, jadi penomboran tidak
 * boleh dipercayai sebagai penunjuk urutan.
 */
import tebingSebelum from '../assets/kerja/perlindungan-tebing-sebelum.jpeg';
import tebingSelepas from '../assets/kerja/perlindungan-tebing-selepas.jpeg';
import cerunSebelum from '../assets/kerja/pengukuhan-cerun-sebelum.jpeg';
import cerunSelepas from '../assets/kerja/pengukuhan-cerun-selepas.jpeg';
import tembokSebelum from '../assets/kerja/tembok-penahan-sebelum.jpeg';
import tembokSelepas from '../assets/kerja/tembok-penahan-selepas.jpeg';

/**
 * All site copy in Bahasa Melayu.
 *
 * CONTENT RULE — dipatuhi sepanjang fail ini:
 * Tiada nombor projek, tahun pengalaman, sijil, kelulusan kerajaan, senarai
 * pelanggan atau testimoni direka. Setiap kenyataan teknikal terhad kepada
 * fungsi gabion yang diketahui umum dan yang disahkan oleh klien.
 */

export interface Problem {
  icon: IconName;
  title: string;
  body: string;
}

export const problems: Problem[] = [
  {
    icon: 'slope-fail',
    title: 'Tebing runtuh atau semakin terhakis',
    body: 'Tanah di tepi sungai, longkang atau kawasan lereng semakin susut selepas hujan lebat. Setiap kali banjir atau ribut, lebih banyak tanah hilang.',
  },
  {
    icon: 'water',
    title: 'Aliran air merosakkan kawasan tapak',
    body: 'Air yang mengalir laju semasa hujan mengikis permukaan tanah, membawa keluar tanah bawah, dan meninggalkan lubang atau lekuk di kawasan tapak.',
  },
  {
    icon: 'wall',
    title: 'Tembok penahan sedia ada tidak lagi kukuh',
    body: 'Tembok konkrit yang retak, condong atau tersumbat salirannya. Tekanan air yang terperangkap di belakang tembok tertutup mempercepatkan kerosakan.',
  },
  {
    icon: 'warning',
    title: 'Cerun berisiko bergerak atau runtuh',
    body: 'Kawasan cerun berhampiran rumah, jalan masuk atau bangunan yang menunjukkan tanda pergerakan tanah dan perlukan pengukuhan sebelum keadaan bertambah buruk.',
  },
];

export interface Benefit {
  icon: IconName;
  title: string;
  body: string;
}

/** Fungsi yang dinyatakan klien, ditambah kelebihan praktikal sistem gabion. */
export const benefits: Benefit[] = [
  {
    icon: 'wall',
    title: 'Menguatkan dinding dan tembok penahan',
    body: 'Struktur gabion menambah berat dan kestabilan pada kaki tembok atau dinding penahan sedia ada.',
  },
  {
    icon: 'shield',
    title: 'Mencegah hakisan tanah dan tebing',
    body: 'Muka batu melindungi permukaan tanah daripada terus dikikis oleh aliran air dan hujan.',
  },
  {
    icon: 'drainage',
    title: 'Membenarkan air mengalir keluar',
    body: 'Struktur ini telap air. Air tidak terkumpul di belakang dinding, jadi tekanan air tidak meningkat seperti pada tembok tertutup.',
  },
  {
    icon: 'water',
    title: 'Mengurangkan kesan aliran air',
    body: 'Membantu memperlahankan dan mengalihkan aliran air di kawasan tertentu, dan mengurangkan kesan limpahan pada tapak.',
  },
  {
    icon: 'slope-fail',
    title: 'Membantu mencegah risiko tanah runtuh',
    body: 'Menahan kaki cerun supaya tanah di atasnya tidak mudah bergerak turun.',
  },
  {
    icon: 'gabion',
    title: 'Fleksibel mengikut keadaan tanah',
    body: 'Sangkar boleh lentur sedikit mengikut pergerakan tanah tanpa terus retak seperti struktur tegar.',
  },
  {
    icon: 'stone',
    title: 'Kemasan batu yang tahan lasak',
    body: 'Batu bergred memberikan rupa semula jadi yang sesuai untuk kawasan luar dan tidak memerlukan kemasan tambahan.',
  },
  {
    icon: 'survey',
    title: 'Dibina mengikut keadaan tapak',
    body: 'Ketinggian, panjang dan susunan tingkat ditentukan berdasarkan keadaan sebenar di tapak anda.',
  },
];

export interface Service {
  slug: string;
  icon: IconName;
  title: string;
  summary: string;
  detail: string[];
  suitableFor: string[];
  /** Gambar tapak sebenar bagi perkhidmatan ini. */
  photo: ImageMetadata;
  /** Alt text — terangkan apa yang kelihatan dalam gambar. */
  photoAlt: string;
}

export const services: Service[] = [
  {
    slug: 'pemasangan-gabion-wall',
    icon: 'gabion',
    title: 'Pemasangan Gabion Wall',
    summary:
      'Pembinaan struktur gabion lengkap: pemasangan sangkar mesh, pengisian batu bergred, dan pengikatan antara sangkar.',
    detail: [
      'Kerja pemasangan bermula dengan penyediaan tapak dan aras asas supaya struktur duduk rata dan stabil.',
      'Sangkar mesh disusun mengikut susunan yang ditetapkan, diikat antara satu sama lain, kemudian diisi dengan batu bergred yang disusun rapat supaya ruang kosong dikurangkan.',
      'Susunan bertingkat digunakan apabila keadaan tapak memerlukan ketinggian tertentu, dengan setiap tingkat ditarik sedikit ke belakang mengikut keperluan.',
    ],
    suitableFor: ['Kawasan rumah', 'Tanah dan kebun', 'Tapak pembinaan', 'Projek komersial'],
    photo: fotoPemasangan,
    photoAlt:
      'Kerja pemasangan gabion di tepi sungai sedang berjalan — sangkar disusun mengikut lengkung tebing dengan jengkaut di tapak.',
  },
  {
    slug: 'perlindungan-tebing',
    icon: 'shield',
    title: 'Perlindungan Tebing',
    summary:
      'Perlindungan tebing sungai, longkang dan kawasan tepi air yang terdedah kepada hakisan berterusan.',
    detail: [
      'Tebing yang berhadapan dengan aliran air berterusan akan terus terhakis jika permukaannya dibiarkan terdedah.',
      'Struktur gabion diletakkan di kaki dan muka tebing untuk melindungi permukaan tanah daripada aliran air, sambil membenarkan air dari dalam tanah keluar dengan bebas.',
    ],
    suitableFor: ['Tebing sungai', 'Tepi longkang besar', 'Kawasan tepi air'],
    photo: fotoTebing,
    photoAlt:
      'Struktur gabion mengikut lengkung tebing sungai, dipasang di kaki tebing dengan jengkaut bekerja di belakang.',
  },
  {
    slug: 'kawalan-hakisan',
    icon: 'water',
    title: 'Kawalan Hakisan',
    summary:
      'Kerja mengawal hakisan pada permukaan tanah yang kerap dilalui air larian hujan.',
    detail: [
      'Hakisan biasanya bermula kecil — satu alur air, satu sudut tanah yang gugur — sebelum menjadi masalah besar.',
      'Struktur gabion digunakan untuk melindungi kawasan yang menerima aliran air paling kuat dan mengurangkan kelajuan air yang melalui kawasan tersebut.',
    ],
    suitableFor: ['Kawasan lereng', 'Laluan air larian', 'Kawasan tapak terdedah'],
    photo: fotoHakisan,
    photoAlt:
      'Tebing tanah merah yang terhakis teruk selepas hujan — alur dalam terbentuk di muka tanah, akar rumput tergantung terdedah dan ketulan tanah gugur ke kaki tebing.',
  },
  {
    slug: 'pengukuhan-cerun',
    icon: 'slope-fail',
    title: 'Pengukuhan Cerun',
    summary:
      'Pengukuhan kaki cerun untuk mengurangkan risiko pergerakan tanah dan runtuhan.',
    detail: [
      'Cerun yang menunjukkan tanda pergerakan perlu ditahan di bahagian kakinya supaya tanah di atas tidak terus bergerak turun.',
      'Struktur gabion memberikan berat dan penahanan di kaki cerun, dan pada masa sama membenarkan air keluar daripada badan cerun.',
    ],
    suitableFor: ['Cerun berhampiran rumah', 'Jalan masuk', 'Kawasan bangunan'],
    photo: fotoCerun,
    photoAlt:
      'Gabion bertingkat empat lapis menahan kaki cerun di bawah kawasan rumah, diambil dari aras tanah di bawah.',
  },
  {
    slug: 'tembok-penahan-batu',
    icon: 'wall',
    title: 'Tembok Penahan Batu',
    summary:
      'Tembok penahan menggunakan sistem gabion, sesuai untuk kawasan yang memerlukan saliran baik.',
    detail: [
      'Tembok penahan gabion menahan tanah di belakangnya menggunakan berat batu di dalam sangkar.',
      'Berbeza daripada tembok tertutup, air boleh melalui struktur ini, jadi tekanan air tidak berkumpul di belakang tembok.',
    ],
    suitableFor: ['Beza aras tanah', 'Halaman rumah', 'Kawasan tapak berbukit'],
    photo: fotoTembok,
    photoAlt:
      'Tembok penahan gabion tiga lapis di tepi jalan kampung, menahan tanah kawasan rumah di aras lebih tinggi.',
  },
  {
    slug: 'kerja-saliran',
    icon: 'drainage',
    title: 'Kerja Saliran & Pengukuhan Tapak',
    summary:
      'Kerja berkaitan saliran dan pengukuhan tapak yang menyokong struktur gabion.',
    detail: [
      'Struktur yang baik memerlukan laluan air yang betul. Kerja saliran memastikan air dialirkan ke tempat yang sepatutnya.',
      'Kerja pengukuhan tapak lain dijalankan mengikut keperluan sebenar di lokasi, ditentukan semasa semakan tapak.',
    ],
    suitableFor: ['Tapak baharu', 'Kawasan bermasalah air', 'Kerja penambahbaikan'],
    photo: fotoSaliran,
    photoAlt:
      'Parit saliran yang digali di tapak, dilapik kain geotekstil dan diisi batu bergred, dengan tali penanda aras di tepi dan jengkaut di belakang.',
  },
];

export interface Reason {
  icon: IconName;
  title: string;
  body: string;
}

/** Sebab yang boleh disahkan sahaja. Tiada statistik atau anugerah direka. */
export const reasons: Reason[] = [
  {
    icon: 'gabion',
    title: 'Fokus khusus pada gabion wall',
    body: 'Pemasangan gabion wall adalah kerja utama kami, bukan satu daripada senarai panjang perkhidmatan am.',
  },
  {
    icon: 'survey',
    title: 'Penyelesaian ikut keadaan tapak',
    body: 'Cadangan diberikan selepas melihat keadaan sebenar tapak anda — jenis masalah, aliran air, dan ruang kerja yang ada.',
  },
  {
    icon: 'wall',
    title: 'Sesuai untuk pelbagai jenis tapak',
    body: 'Kawasan rumah, tanah dan kebun, projek komersial, serta tapak pembinaan.',
  },
  {
    icon: 'whatsapp',
    title: 'Mudah berhubung melalui WhatsApp',
    body: 'Hantar gambar keadaan tapak terus melalui WhatsApp. Tidak perlu isi borang panjang untuk mula bertanya.',
  },
];

export interface ProcessStep {
  title: string;
  body: string;
}

export const processSteps: ProcessStep[] = [
  {
    title: 'Hubungi kami',
    body: 'Hantar mesej WhatsApp dengan gambar keadaan tapak dan cerita ringkas tentang masalah yang dihadapi.',
  },
  {
    title: 'Semakan tapak',
    body: 'Kami aturkan lawatan untuk melihat keadaan sebenar: jenis tanah, aliran air, ketinggian yang diperlukan, dan laluan masuk untuk kerja.',
  },
  {
    title: 'Sebut harga',
    body: 'Sebut harga disediakan berdasarkan ukuran, ketinggian dan keadaan tapak yang telah disemak.',
  },
  {
    title: 'Kerja pemasangan',
    body: 'Kerja dijalankan mengikut susunan yang dipersetujui, dari penyediaan tapak sehingga struktur siap.',
  },
];

export const faqs: FaqItem[] = [
  {
    q: 'Apa itu gabion wall?',
    a: [
      'Gabion wall ialah struktur yang dibina daripada sangkar besi atau mesh yang diisi dengan batu. Sangkar ini disusun dan diikat bersama untuk membentuk dinding atau lapisan pelindung.',
      'Berat batu di dalam sangkar itulah yang menahan tanah, dan ruang antara batu membenarkan air mengalir keluar.',
    ],
  },
  {
    q: 'Di mana gabion wall sesuai dipasang?',
    a: [
      'Ia biasa digunakan di tebing sungai dan longkang, kaki cerun, kawasan yang mengalami hakisan, serta sebagai tembok penahan di kawasan yang ada beza aras tanah.',
      'Ia juga sesuai untuk kawasan rumah, tanah dan kebun, tapak pembinaan, dan projek komersial. Kesesuaian sebenar bergantung pada keadaan tapak, jadi semakan tapak diperlukan.',
    ],
  },
  {
    q: 'Berapa kos pemasangan gabion wall?',
    a: [
      'Kos tidak boleh ditetapkan tanpa melihat tapak. Ia bergantung pada beberapa perkara: panjang dan ketinggian struktur yang diperlukan, keadaan tanah asas, jenis dan jumlah batu yang digunakan, serta kemudahan laluan masuk untuk membawa bahan ke tapak.',
      'Hubungi kami melalui WhatsApp dengan gambar keadaan tapak. Kami akan aturkan semakan tapak dan sediakan sebut harga berdasarkan keadaan sebenar.',
    ],
  },
  {
    q: 'Berapa lama gabion wall boleh tahan?',
    a: [
      'Jangka hayat bergantung pada kualiti mesh yang digunakan, jenis batu, keadaan persekitaran, dan cara pemasangan dijalankan.',
      'Faktor seperti pendedahan kepada air masin, aliran air yang sangat kuat, dan pergerakan tanah yang berterusan boleh mempengaruhi jangka hayat struktur. Kami akan bincangkan pilihan bahan yang sesuai semasa semakan tapak.',
    ],
  },
  {
    q: 'Adakah gabion wall sesuai untuk kawasan rumah?',
    a: [
      'Ya, gabion biasa digunakan di kawasan kediaman — untuk menahan beza aras tanah di halaman, melindungi kawasan tepi longkang, atau mengukuhkan cerun berhampiran rumah.',
      'Kemasan batu semula jadi juga sesuai untuk kawasan luar rumah tanpa memerlukan kemasan tambahan.',
    ],
  },
  {
    q: 'Adakah gabion wall membantu kurangkan hakisan dan risiko runtuhan?',
    a: [
      'Struktur gabion digunakan secara meluas untuk kawalan hakisan dan perlindungan cerun. Muka batu melindungi permukaan tanah daripada aliran air, dan berat struktur membantu menahan kaki cerun.',
      'Keberkesanannya bergantung pada rekaan yang sesuai untuk keadaan tapak. Struktur yang dipasang tanpa mengambil kira punca sebenar masalah mungkin tidak memberikan hasil yang dijangka.',
    ],
  },
  {
    q: 'Kenapa gabion dan bukan tembok konkrit biasa?',
    a: [
      'Perbezaan utama ialah saliran. Tembok konkrit tertutup menghalang air, jadi air boleh terkumpul di belakangnya dan membina tekanan yang boleh meretakkan atau mencondongkan tembok.',
      'Gabion telap air — air melalui celah batu dan keluar di muka dinding. Struktur ini juga boleh lentur sedikit mengikut pergerakan tanah tanpa terus retak.',
      'Ini tidak bermakna gabion sesuai untuk semua keadaan. Pilihan bergantung pada keadaan tapak dan keperluan sebenar.',
    ],
  },
  {
    q: 'Bagaimana proses semakan tapak dan sebut harga?',
    a: [
      'Mulakan dengan mesej WhatsApp — sertakan gambar keadaan tapak dan cerita ringkas tentang masalahnya.',
      'Selepas itu kami aturkan lawatan ke tapak untuk melihat keadaan sebenar. Sebut harga disediakan berdasarkan apa yang dilihat semasa lawatan tersebut.',
    ],
  },
  {
    q: 'Kawasan mana yang anda layani?',
    a: [
      'Kami menerima pertanyaan dari seluruh Malaysia. Untuk lokasi yang jauh, sila maklumkan lokasi tapak awal-awal supaya kami boleh sahkan sama ada kerja tersebut boleh diambil dan bagaimana pengangkutan bahan akan diuruskan.',
    ],
  },
];

export interface ProjectSlot {
  ref: string;
  title: string;
  problem: string;
  solution: string;
  /** Gambar keadaan tapak sebelum kerja. */
  before: ImageMetadata;
  beforeAlt: string;
  /** Gambar tapak yang sama selepas struktur gabion siap. */
  after: ImageMetadata;
  afterAlt: string;
}

/**
 * Galeri projek — pasangan sebelum/selepas.
 *
 * PERINGATAN PEMBANGUN: enam gambar di bawah ialah imej janaan AI yang dijana
 * daripada prompt dalam PROMPT-GAMBAR-AI.md, bukan foto tapak Gubah Bina.
 * Ia dipaparkan tanpa label atas arahan pemilik projek. Ganti dengan foto
 * sebenar sebaik klien membekalkannya, dan jangan tambah pasangan rekaan
 * yang baharu.
 *
 * `problem` dan `solution` kekal sebagai penerangan jenis kerja secara am,
 * bukan butiran projek tertentu.
 */
export const projectSlots: ProjectSlot[] = [
  {
    ref: 'G-01',
    title: 'Perlindungan tebing',
    problem: 'Tebing terhakis akibat aliran air',
    solution: 'Struktur gabion di kaki dan muka tebing',
    before: tebingSebelum,
    beforeAlt:
      'Tebing sungai yang terhakis sehingga tanah merah terdedah dan sebatang pokok tumbang ke dalam air, dengan rumah kampung di atas tebing.',
    after: tebingSelepas,
    afterAlt:
      'Tebing sungai yang sama selepas dilindungi tembok gabion bertingkat empat, mengikut lengkung tebing dari muka air hingga ke aras tanah.',
  },
  {
    ref: 'G-02',
    title: 'Pengukuhan cerun',
    problem: 'Cerun menunjukkan tanda pergerakan tanah',
    solution: 'Gabion bertingkat di kaki cerun',
    before: cerunSebelum,
    beforeAlt:
      'Cerun tepi jalan yang runtuh selepas hujan, tanah merah dan lumpur melimpah ke bahu jalan dengan penghadang keselamatan dipasang.',
    after: cerunSelepas,
    afterAlt:
      'Cerun tepi jalan yang sama selepas diperkukuh dengan gabion bertingkat, setiap tingkat dipisahkan oleh teres berumput.',
  },
  {
    ref: 'G-03',
    title: 'Tembok penahan',
    problem: 'Beza aras tanah memerlukan penahan',
    solution: 'Tembok penahan gabion',
    before: tembokSebelum,
    beforeAlt:
      'Tepi tanah rumah yang gugur menjadi parit terhakis, tiang pagar condong kerana tanah di bawahnya hilang.',
    after: tembokSelepas,
    afterAlt:
      'Tepi tanah yang sama selepas tembok penahan gabion dua tingkat dibina, dengan laluan batu baru di sepanjang kakinya.',
  },
];
