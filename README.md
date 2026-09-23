# Blog Pribadi

Starter Jekyll untuk blog tulisan pribadi, di-hosting via GitHub Pages dengan domain custom `verify-or.duckdns.org`.

## Struktur Folder

```
.
├── _config.yml        # Konfigurasi situs
├── _includes/          # Komponen (header, footer)
├── _layouts/            # Template halaman (default, post, page)
├── _posts/              # Semua tulisan (format: YYYY-MM-DD-judul.md)
├── assets/css/         # Stylesheet
├── about.md             # Halaman "Tentang"
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
