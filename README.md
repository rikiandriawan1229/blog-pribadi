# Blog Pribadi

Starter Jekyll untuk blog tulisan pribadi, di-hosting via GitHub Pages dengan domain custom `verify-or.duckdns.org`.

## Struktur Folder

```
.
├── _config.yml        # Konfigurasi situs
├── _includes/          # Komponen (header + menu, footer, kartu tulisan)
├── _layouts/            # Template halaman (default, post, page)
├── _posts/              # Semua tulisan (format: YYYY-MM-DD-judul.md)
├── assets/css/         # Stylesheet
├── assets/js/          # Skrip menu dan tombol Selengkapnya/Ringkas
├── assets/images/      # Gambar tulisan (unggah di sini)
├── about.md             # Halaman "Tentang"
├── topik.md, arsip.md, metode.md, kontak.md  # Halaman menu
├── index.html           # Halaman beranda (daftar tulisan)
└── CNAME                 # Custom domain untuk GitHub Pages
```

## Menulis Artikel Baru

Buat file baru di `_posts/` dengan format nama:
`YYYY-MM-DD-judul-singkat.md`

Isi front matter di bagian atas:

```yaml
---
title: "Judul Tulisan"
date: 2026-09-24 08:00:00 +0800
category: Nama Kategori
sources:
  - name: "Nama Sumber"
    url: "https://link-sumber.com"
---
```

## Menjalankan Secara Lokal

```bash
bundle install
bundle exec jekyll serve
```

Buka `http://localhost:4000` di browser.

## Menambah Gambar pada Tulisan

1. Unggah file gambar ke folder `assets/images/` (di GitHub: **Add file → Upload files**).
2. Tambahkan di front matter tulisan:

```yaml
image: /assets/images/nama-gambar.jpg
image_alt: "Deskripsi singkat gambar"
image_caption: "Keterangan gambar (opsional)"
```

Gambar tampil di sebelah kanan cuplikan di beranda dan di atas isi pada halaman tulisan.
Tanpa `image`, tampil blok pengganti berisi `og-default.png`.

## Cuplikan di Beranda

Secara bawaan cuplikan adalah paragraf pertama tulisan. Untuk cuplikan yang berbeda,
isi `summary: "Kalimat pembuka"` di front matter.

## Mengubah Menu

Menu di panel kiri diatur pada bagian `nav:` di `_config.yml`.
Isi email pada `email:` di `_config.yml` agar halaman Kontak menampilkannya.
