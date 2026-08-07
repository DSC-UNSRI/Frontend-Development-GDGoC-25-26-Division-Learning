# Frontend Development Final Project: Build What Matters

**Turning real-world problems into meaningful digital solutions.**

Final Project | Frontend Development Division | GDGoC UNSRI Batch 2025/2026

---

## Tema dan Kategori Project

Project yang dibangun harus menyelesaikan masalah nyata. Project sederhana yang hanya CRUD tanpa alasan yang jelas atau tanpa konteks permasalahan yang kuat tidak akan diterima.

Terdapat tiga kategori project yang bisa dipilih:

### Kategori 1: Masalah Pribadi

Membangun website berdasarkan permasalahan yang dialami secara pribadi, di mana masalah tersebut belum memiliki solusi digital, atau sudah ada solusinya tapi belum benar-benar menyelesaikan masalah tersebut.

### Kategori 2: Masalah Umum

Membangun website berdasarkan permasalahan nyata dan umum (tidak spesifik ke satu orang). Solusi digitalnya belum tersedia, atau sudah ada tapi masih memiliki kekurangan yang bisa diperbaiki atau ditambahkan fiturnya.

Contoh: membuat platform donasi seperti Saweria atau Kitabisa, tetapi dengan tambahan fitur yang belum dimiliki platform serupa, misalnya fitur filter anti promosi judi online.

### Kategori 3: Studi Kasus Nyata (Poin Lebih)

Membangun website dari masalah yang benar-benar ada kasusnya, spesifik, dan dapat diobservasi langsung.

Contoh studi kasus:

- **Sistem Kelola Workflow GDGoC**: pembentukan panitia, pengelolaan event, rekap absensi, dan manajemen member yang masih dilakukan secara manual.
- **Learning Management System GDGoC**: arsip materi, tugas, dan data kehadiran tiap divisi yang masih dikelola terpisah oleh masing-masing core team.
- **Sistem Kelola Jadwal Perkuliahan**: fakultas atau jurusan di Universitas Sriwijaya yang masih mengelola jadwal secara manual.
- **Sistem Kelola Bisnis**: usaha seperti Kopi Yook yang belum memiliki sistem digital untuk operasional bisnisnya.

Contoh di atas hanya gambaran. Member bebas mencari studi kasus lain yang nyata dan relevan.

### Pengajuan Tema

1. Semua member wajib mengisi tema, deskripsi project, dan alasan membangun project tersebut di spreadsheet berikut: **[Spreadsheet Pengajuan Tema](https://docs.google.com/spreadsheets/d/1tf2ZBpfgDOTkNqTWEZp-FJErIDGLOKEJLjjykG_aUpc/edit?usp=sharing)**
2. Tema antar member tidak boleh sama atau terlalu mirip.
3. Tema yang diajukan dapat ditolak oleh core team jika dinilai tidak memenuhi kriteria (masalah tidak jelas, tujuan tidak kuat, konteks terlalu sederhana, dsb).
4. Pengajuan tema dilakukan paling lambat pada Progress Report 1.

---

## Tech Stack

**Wajib:**

| Teknologi    | Fungsi                                     |
| ------------ | ------------------------------------------ |
| React        | Frontend framework                         |
| Tailwind CSS | Styling                                    |
| Supabase     | Backend utama (autentikasi, database, API) |

**Library Pendukung (diperbolehkan):**

- shadcn/ui untuk komponen siap pakai
- React Hook Form + Zod untuk form management dan validasi
- Axios untuk HTTP request
- TanStack Query untuk data fetching
- Zustand untuk state management
- Library React lainnya sesuai kebutuhan

**Service/Provider Tambahan (diperbolehkan):**

Penggunaan service atau provider tambahan diperbolehkan sebagai fitur pendukung selama tidak menggantikan fungsi utama Supabase sebagai backend. Contoh: Gemini API untuk chatbot, WebSocket untuk fitur realtime, Python framework atau public API lainnya untuk backend tambahan.

---

## Ketentuan Teknis Website

1. **Sistem Autentikasi**: Website harus memiliki fitur register dan login menggunakan Supabase Auth.
2. **Landing Page**: Website wajib memiliki halaman utama yang menjelaskan website beserta Call-to-Action (CTA) yang jelas.
3. **Multi-Page dengan Routing**: Website memiliki lebih dari 1 halaman dan menerapkan routing menggunakan React Router.
4. **Operasi CRUD**: Setiap data utama di aplikasi harus bisa ditambah, dilihat, diubah, dan dihapus, minimal menggunakan Supabase.
5. **Database dengan Tabel yang Saling Berhubungan**: Database tidak boleh hanya terdiri dari satu tabel. Tabel-tabel harus saling berhubungan sesuai konteks aplikasi. Contoh: pada sistem toko online, tabel `users` terhubung ke tabel `orders`, dan tabel `orders` terhubung ke tabel `products`.
6. **Role-Based Authorization**: Minimal 2 role pengguna (misal: admin dan user biasa), masing-masing memiliki hak akses berbeda baik dari segi halaman maupun aksi yang bisa dilakukan.
7. **File Upload**: Minimal terdapat 1 fitur yang menangani upload foto atau file.
8. **Minimal 3-4 Tabel**: Di luar tabel autentikasi bawaan Supabase, database harus memiliki minimal 3-4 tabel dengan masing-masing memiliki operasi CRUD. Selain CRUD standar, harus ada operasi tambahan sesuai kebutuhan sistem (contoh: pencarian, filter kategori, proses persetujuan, pengurutan berdasarkan kriteria tertentu, dsb).

---

## Ketentuan Pengerjaan

1. Project disimpan di repository GitHub dengan nama sesuai project/produk yang dibuat (boleh membuat nama produk sendiri). Berikan deskripsi project yang jelas di halaman repository.
2. Repository wajib di-private. Invite akun GitHub **ElloRabyndra** sebagai collaborator, lalu kabari core team.
3. Menerapkan conventional commit message. Contoh: `feat: add login page`, `fix: resolve routing issue`, `refactor: extract auth logic to custom hook`.
4. Menerapkan atomic commit (satu commit berisi satu perubahan/logical unit yang jelas). Pastikan semua commit berasal dari akun GitHub sendiri. Tidak boleh ada akun GitHub lain atau agent AI yang tercatat di history commit.
5. Membuat dokumentasi README yang jelas, mencakup: penjelasan project dan fitur, cara menjalankan project (sedetail dan sejelas mungkin), serta flow/alur penggunaan website.
6. Wajib deploy ke Vercel atau provider hosting lain. Jika project memiliki service tambahan yang berjalan secara lokal dan tidak bisa di-deploy, bagian tersebut tidak wajib di-deploy, tapi frontend React tetap harus di-deploy.
7. Kredensial dimasukkan ke file `.env` dan tidak di-commit. Buatkan file `.env.example` sebagai referensi. Kredensial Supabase akan dikumpulkan melalui Google Form yang akan diberikan saat waktu pengumpulan.
8. Tidak boleh melakukan commit setelah deadline pengumpulan (25 September 2026), kecuali untuk perbaikan minor (typo, bug kecil, penyesuaian UI ringan). Commit di luar kategori tersebut setelah deadline akan mengurangi penilaian.
9. Progress Report 1 wajib ada progres (penentuan tema). Progress Report 2 sampai 5 tidak harus selalu ada progres, asalkan project selesai tepat waktu. Progress report tidak masuk penilaian secara langsung. Detail format progress report akan disampaikan terpisah.
10. Membuat slide presentasi (PPT/PDF) dengan waktu presentasi **10-15 menit per member** secara offline. Materi presentasi mencakup: overview project (masalah dan solusi), tech stack, arsitektur sistem, penjelasan source code penting, dan demo website.

---

## Timeline

| Kegiatan                                                    | Tanggal                |
| ----------------------------------------------------------- | ---------------------- |
| Briefing dan Mulai Pengerjaan                               | 7 Agustus 2026         |
| Progress Report 1 (Brainstorming dan Breakdown Ide Project) | 14 - 16 Agustus 2026   |
| Progress Report 2                                           | 28 - 30 Agustus 2026   |
| Progress Report 3                                           | 4 - 6 September 2026   |
| Progress Report 4                                           | 11 - 13 September 2026 |
| Progress Report 5                                           | 18 - 20 September 2026 |
| Pengumpulan / Last Commit                                   | 25 September 2026      |
| Presentasi Final Project (Offline)                          | 27 September 2026      |

Note: Jadwal progress report bersifat tentatif.

---

## Rubrik Penilaian

### Penilaian Umum

| Kriteria                   | Deskripsi                                                                       |
| -------------------------- | ------------------------------------------------------------------------------- |
| Tema                       | Penemuan masalah dan kreativitas ide dalam menentukan tema                      |
| Impact dan Solusi          | Apakah website yang dibangun benar-benar solutif atau sekadar asal pilih tema   |
| Komunikasi                 | Keaktifan komunikasi dengan core team selama masa pengerjaan                    |
| Presentasi                 | Penguasaan materi dan kualitas penyampaian saat presentasi                      |
| Kesesuaian dengan Rencana | Hasil akhir sesuai rencana awal. Perubahan diperbolehkan selama dikomunikasikan |
| Dokumentasi                | Kelengkapan dan kejelasan README project                                        |

### Penilaian Teknis

| Kriteria                      | Deskripsi                                                                                                                                                                                                         |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| UI/UX Design                  | Kualitas desain antarmuka dan pengalaman pengguna. Sebagai divisi frontend, minimal tampilan website harus bagus dan dibuat dengan serius                                                                         |
| Best Practice                 | Kualitas penulisan kode. Contoh: tidak props drilling, penggunaan custom hooks untuk logika reusable, penamaan variabel/fungsi yang deskriptif, pemisahan komponen yang tepat, penanganan loading state dan error |
| Arsitektur Kode               | Struktur folder dan organisasi file yang rapi, konsisten, dan mudah dipahami                                                                                                                                      |
| Responsive                    | Website tampil dan berfungsi dengan baik di berbagai ukuran layar                                                                                                                                                 |
| Kematangan Fitur              | Kualitas dan kematangan implementasi fitur sesuai tema dan kebutuhan pengguna. Tidak hanya memastikan fitur berjalan, tetapi juga memperhatikan alur penggunaan, validasi, dan kondisi yang mungkin terjadi dalam penggunaan nyata.                                                                                                                                                 |
| Commit History                | Penerapan conventional commit message dan atomic commit secara konsisten                                                                                                                                          |
| Prioritas Materi Pembelajaran | Penilaian berpusat pada implementasi materi pertemuan 1-15. Implementasi di luar materi tersebut menjadi nilai tambahan (penilaian tetap dibuat seimbang)                                                         |

---

## FAQ

**Apakah tema yang sudah dipilih bisa diubah?**
Bisa, selama sebelum waktu pengumpulan. Risiko waktu yang terpakai ditanggung sendiri.

**Apakah boleh menggunakan Next.js?**
Tidak. Gunakan client-side React. Jangan menggunakan Next.js atau framework SSR lainnya.

**Apakah boleh menggunakan React dengan TypeScript?**
Boleh, tapi pastikan sudah menguasai dasar-dasar React + Vanilla JS.

**Apakah boleh menggunakan Express.js atau backend selain dari Supabase?**
Boleh jika hanya sebagai backend tambahan/pendukung, namun tetap menggunakan Supabase sebagai backend utama.

**Apakah boleh menggunakan Figma untuk merancang UI?**
Tidak diwajibkan, tapi disarankan.

**Apakah boleh menggunakan template atau starter kit?**
Boleh, tetapi cantumkan sumber template pada README.

**Bagaimana jika ada ketentuan atau fitur yang tidak saya dipenuhi?**
Tetap diterima dan akan dinilai, kecuali ketentuan/fitur yang tidak dipenuhi tersebut (Tidak Sempurna)

**Apakah boleh menggunakan AI atau menerapkan vibe coding?**
Boleh, gunakan AI sewajarnya sebagai alat bantu. Pastikan selalu periksa dan pahami hasil yang di-generate. Jangan menyelesaikan final project ini sepenuhnya dengan AI tanpa memahami isi codebase yang dimiliki. Jika saat presentasi tidak bisa menjelaskan kode sendiri, itu akan terlihat. Gunakan dengan bijak, risikonya ditanggung sendiri.
