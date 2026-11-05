---
title: "Amaran awam: Tahap ancaman siber negara kini Sederhana. Apa maknanya untuk anda, dan apa yang mesti dibuat oleh setiap orang IT sekarang"
slug: "cyber-threat-level-bm"
date: "2026-11-05"
status: "Public"
type: "Post"
category: ["Advisory"]
tags: ["advisory", "security", "nacsa", "pdpa", "healthcare", "malaysia"]
summary: "Pada 4 November 2026 Majlis Keselamatan Negara menaikkan tahap ancaman siber negara daripada Rendah kepada Sederhana. Ini yang perlu orang awam jangkakan, dan yang mesti dibuat minggu ini oleh sesiapa yang membangunkan atau mengendalikan sistem."
thumbnail: null
---

<div style="text-align:center"><a href="/advisory/cyber-threat-level-en">Read in English</a></div>

## Apa yang berlaku

Pada 4 November 2026 Majlis Keselamatan Negara (MKN) mengumumkan bahawa Agensi Keselamatan Siber Negara (NACSA) telah menaikkan Tahap Ancaman Keselamatan Siber Negara daripada **Rendah** kepada **Sederhana**. MKN menyifatkannya sebagai langkah berjaga-jaga berikutan perkembangan keselamatan semasa, supaya perkhidmatan penting negara terus berjalan.

Ia menyusuli penyata Perdana Menteri di Dewan Rakyat pada 3 November, selepas mesyuarat khas MKN sehari sebelumnya. Beliau berkata Malaysia dianggap sasaran serangan siber yang berpotensi, atas dua sebab: infrastruktur digital dan pusat data negara antara yang terkuat di rantau ini, dan pendirian Malaysia mengenai Palestin. Beliau menambah tidak semua maklumat yang kerajaan ada boleh didedahkan.

Organisasi yang mengendalikan sistem kritikal negara (Infrastruktur Maklumat Kritikal Negara, atau NCII) telah diarahkan melaksanakan sembilan langkah kesiapsiagaan. Empat yang diumumkan ialah pemantauan keselamatan 24 jam, penampalan (patching) sistem, pengesahan berbilang faktor, dan pelan kesinambungan perkhidmatan yang dikemas kini. Ketua sektor kini wajib melaporkan status ancaman kepada NACSA setiap minggu. Dalam bulan Oktober sahaja, pusat koordinasi NACSA (NC4) mengeluarkan lapan amaran tentang kelemahan yang menjejaskan pengendali kritikal dan agensi kerajaan.

::: tab Orang awam

![Infografik amaran awam untuk orang awam: tahap ancaman siber negara kini Sederhana, apa maknanya dan enam langkah sekarang](https://drmsr.dev/images/advisory/cyber-threat-level-public-ms.png?v=1)

[Kongsi infografik orang awam](#share-image:/images/advisory/cyber-threat-level-public-ms.png)

## Apa maknanya untuk anda

Tiada serangan terhadap orang awam Malaysia yang diumumkan. Tahap ancaman mengubah apa yang institusi buat, bukan rutin harian anda. Bank, hospital, utiliti, telco dan sistem kerajaan sedang mengetatkan pertahanan, dan sebahagiannya mungkin lebih perlahan atau tergendala seketika semasa itu.

Yang patut anda jangkakan ialah **lebih banyak penipuan yang menunggang berita ini**. Setiap amaran seperti ini melahirkan gelombang mesej palsu: "Amaran MKN, sahkan akaun anda", "bank anda diserang, pindahkan wang anda", "pasang kemas kini keselamatan ini". Tiada satu pun datang daripada kerajaan atau bank anda. Badan rasmi tidak menghantar pautan untuk ditekan, aplikasi untuk dipasang, atau meminta kata laluan dan kod OTP anda.

Perdana Menteri tidak menasihatkan orang awam membuat persiapan kecemasan. Berjaga-jaga, bukan panik.

## Buat sekarang

1. Hidupkan pengesahan dua langkah. WhatsApp (Tetapan, Akaun, Pengesahan dua langkah), e-mel, aplikasi bank, akaun Google atau Apple anda. Satu tetapan ini menghalang kebanyakan rampasan akaun.
2. Anggap mesej yang mendesak sebagai mencurigakan, terutamanya yang menyebut amaran ini, bank anda, kerajaan, atau "kemas kini". Jangan tekan pautan itu. Buka aplikasi rasmi sendiri, atau hubungi nombor yang tercetak di kad anda.
3. Kemas kini telefon dan komputer anda. Pasang kemas kini sistem dan aplikasi yang tertunggak hari ini. Kalau anda menerima fail ZIP melalui WhatsApp baru-baru ini, baca [amaran kami yang terdahulu](/advisory/whatsapp-malware-bm).
4. Jangan sekali-kali pasang aplikasi daripada pautan, dan jangan beri kod OTP kepada sesiapa. Bukan kepada "bank", bukan "polis", bukan "sokongan teknikal".
5. Buat sandaran (backup) perkara yang penting. Gambar keluarga, dokumen, fail perniagaan. Simpan satu salinan di tempat yang bukan peranti yang sama.
6. Kalau anda ditipu, hubungi 997 serta-merta. Pusat Respons Scam Kebangsaan beroperasi 24 jam dan panggilan itu dikira sebagai laporan polis. Melapor dalam 24 jam memberi peluang terbaik untuk membekukan wang itu.

:::

::: tab IT dan pembangun

![Infografik amaran awam untuk IT dan pembangun: sebelas sektor NCII dan senarai semak lapan langkah](https://drmsr.dev/images/advisory/cyber-threat-level-it-ms.png?v=1)

[Kongsi infografik IT](#share-image:/images/advisory/cyber-threat-level-it-ms.png)

## Jika anda membangunkan atau mengendalikan sistem: anda sasaran utama

Bahagian ini untuk pembangun perisian, pemilik sistem, orang yang "jaga IT" di klinik atau syarikat kecil, dan semua yang pernah melancarkan aplikasi dengan bantuan AI. Jika sistem anda menyentuh mana-mana daripada sebelas sektor NCII, langkah kesiapsiagaan di atas ialah piawai yang anda akan diukur dengannya, sama ada anda pernah ditetapkan secara rasmi atau tidak.

Sebelas sektor di bawah Akta Keselamatan Siber 2024 (Akta 854) ialah: kerajaan; perbankan dan kewangan; pengangkutan; pertahanan dan keselamatan negara; maklumat, komunikasi dan digital; perkhidmatan kesihatan; air, pembetungan dan pengurusan sisa; tenaga; pertanian dan perladangan; perdagangan, industri dan ekonomi; serta sains, teknologi dan inovasi.

Buat minggu ini, mengikut urutan:

1. **Pengesahan berbilang faktor pada setiap log masuk pentadbir.** Konsol awan, panel hosting, pendaftar domain, GitHub, pangkalan data, e-mel, halaman admin aplikasi anda sendiri. Kata laluan sahaja tidak lagi mencukupi untuk apa-apa yang boleh mengubah sistem produksi.
2. **Tampal semua yang menghadap internet.** NACSA sudah mengeluarkan amaran tentang kelemahan PHP2Shell (CVE-2026-109618 dan CVE-2026-109619, tahap keterukan 9.2). Versi yang telah ditampal ialah PHP 8.2.35, 8.3.36, 8.4.27 dan 8.5.12. PHP 8.1 dan lebih lama tidak lagi menerima kemas kini keselamatan dan mesti dinaik taraf. Kalau tidak boleh tampal sekarang, nasihat NACSA ialah matikan sistem itu sehingga anda boleh. Kemudian buat perkara yang sama untuk sistem pengendalian, rangka kerja, kebergantungan dan plugin anda.
3. **Tahu siapa yang log masuk.** Simpan log akses sekurang-kurangnya 90 hari, dan pasang amaran untuk percubaan log masuk gagal yang berulang dan log masuk dari negara baharu. Pemantauan 24 jam ada dalam senarai NCII atas sebab yang jelas: kebanyakan pencerobohan ditemui oleh orang lain.
4. **Ada sandaran yang pernah anda pulihkan.** Sandaran yang tidak pernah diuji hanyalah harapan. Tulis apa yang berlaku kalau pelayan dipadam esok: di mana sandaran, siapa yang memulihkannya, berapa lama. Itulah pelan kesinambungan perkhidmatan anda.
5. **Hak akses paling minimum, dan tukar rahsia anda.** Buang akses sesiapa yang sudah berhenti. Tiada kunci API atau kata laluan dalam kod sumber atau sejarah chat. Setiap perkhidmatan dapat kelayakan sendiri dengan hanya kebenaran yang diperlukan.
6. **Jauhkan data sebenar daripada alat AI awam.** Termasuk pembantu AI yang anda gunakan untuk mengekod. Pangkalan data produksi, hamparan yang dieksport, senarai pesakit, senarai pelanggan dan log yang mengandungi data peribadi tidak masuk ke dalam prompt. Gunakan data sintetik atau tanpa nama untuk membangun dan menyahpepijat.
7. **Tahu tanggungjawab undang-undang anda sebelum insiden, bukan selepasnya.** Di bawah Akta Perlindungan Data Peribadi (pindaan, garis panduan berkuat kuasa sejak 1 Jun 2025), pelanggaran data yang berkemungkinan menyebabkan kemudaratan ketara, atau melibatkan lebih 1,000 orang, mesti dilaporkan kepada Pesuruhjaya Perlindungan Data Peribadi dalam 72 jam, dan kepada orang yang terjejas dalam 7 hari selepas itu. Anda wajib melantik Pegawai Perlindungan Data jika memproses data peribadi lebih 20,000 orang, atau data peribadi sensitif (data kesihatan adalah sensitif) lebih 10,000 orang. Jika organisasi anda entiti NCII yang ditetapkan, Akta 854 turut mewajibkan anda memaklumkan NACSA serta-merta, dengan butiran dalam 6 jam dan laporan penuh dalam 14 hari. Penalti mencapai RM500,000 dan penjara sepuluh tahun. ISO/IEC 27001 ialah piawai yang akan dirujuk oleh ketua sektor; ia juga senarai semak yang munasabah untuk pasukan kecil.
8. **Tulis pelan insiden satu muka.** Siapa dihubungi dahulu, bagaimana sistem diasingkan, siapa memaklumkan Pesuruhjaya dan pelanggan, di mana sandaran. Cetak. Bila insiden tiba, tiada siapa akan ingat.

## Jika anda dalam bidang kesihatan, baca dua kali

Data kesihatan ialah data peribadi sensitif di sisi undang-undang, dan ia jenis yang paling bernilai kepada penyerang kerana ia tidak boleh ditukar seperti kata laluan. Saat aplikasi, hamparan, chatbot atau sistem klinik anda menyimpan identiti seorang pesakit bersama penyakitnya, anda sudah menjadi sasaran berisiko tinggi, sekecil mana pun anda.

Dua minggu lepas Johns Hopkins Bayview Medical Center di Baltimore memaklumkan 3,182 pesakit bahawa rekod mereka telah terdedah. Tiada penggodam. Seorang pekerja memuat naik hamparan maklumat pesakit (tarikh kemasukan, rawatan, ubat, nombor rekod perubatan) ke alat AI awam yang tidak diluluskan hospital. Hospital menemuinya pada hari yang sama, mengarahkan pekerja itu memadam prompt dan dokumen tersebut, meminta syarikat AI memadam salinannya, dan kini membayar dua belas bulan pemantauan kredit untuk setiap pesakit. Satu muat naik, satu petang.

Jika anda membangunkan sistem pengurusan klinik, rekod kesihatan, penterjemah hasil lab, alat pemasaran klinik, atau apa-apa yang ada AI di dalamnya, piawai di atas terpakai kepada anda walaupun anda "sekadar vibe coding". Binalah seolah-olah pengawal selia dan penyerang akan sama-sama membacanya, kerana akhirnya salah seorang akan.

:::

## Rujukan

- Kenyataan Majlis Keselamatan Negara, 4 November 2026, dilaporkan oleh [Buletin TV3](https://www.buletintv3.my/nasional/tahap-ancaman-keselamatan-siber-negara-dinaikkan-ke-sederhana-mkn/), [The Star](https://www.thestar.com.my/news/nation/2026/11/04/nacsa-raises-level-of-cyber-security-threat-to-medium) dan [Lowyat.NET](https://www.lowyat.net/2026/409217/nacsa-malaysia-cybersecurity-level/)
- Malaysiakini, 3 November 2026, [M'sia a potential target for security threats amid global volatility, PM says](https://www.malaysiakini.com/news/888396-msia-a-potential-target-for-security-threats-amid-global-volatility-pm-says)
- Amaran NACSA tentang PHP2Shell, 22 Oktober 2026, dilaporkan oleh [Lowyat.NET](https://www.lowyat.net/2026/408157/nacsa-urges-php-systems-patch/); amaran rasmi di [nacsa.gov.my](https://www.nacsa.gov.my)
- Akta Keselamatan Siber 2024 (Akta 854), ringkasan oleh [CMS](https://cms.law/en/int/legal-updates/malaysia-s-new-cyber-security-law-takes-effect) dan [ASEAN Briefing](https://www.aseanbriefing.com/news/malaysias-cyber-security-act-2024-what-businesses-need-to-know/)
- Garis panduan Pesuruhjaya Perlindungan Data Peribadi mengenai pemberitahuan pelanggaran data dan Pegawai Perlindungan Data, berkuat kuasa 1 Jun 2025, ringkasan oleh [DLA Piper](https://privacymatters.dlapiper.com/2025/03/malaysia-guidelines-issued-on-data-breach-notification-and-data-protection-officer-appointment/)
- Pendedahan Johns Hopkins Bayview: [The Baltimore Banner](https://www.thebanner.com/community/public-health/johns-hopkins-data-exposure-unauthorized-ai-tool-3SO2HGS7XVDP7GMKSK7TP527NE/), 25 Oktober 2026, dan [Inc.](https://www.inc.com/chloe-rosenberg/the-johns-hopkins-breach-wasnt-caused-by-a-hacker-it-started-with-1-employee-upload/91426495)
- Pusat Respons Scam Kebangsaan 997, [malaysia.gov.my](https://www.malaysia.gov.my/en/categories/safety-and-community/cybersecurity/nsrc-997-hotline)
