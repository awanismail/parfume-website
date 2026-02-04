# Baboo Parfume - Landing Page

Landing page website untuk brand parfum **Baboo Parfume** yang dibangun dengan React, TypeScript, dan Vite.

## Deskripsi

Website landing page yang dirancang dengan prinsip **AIDA (Attention, Interest, Desire, Action)** untuk menarik konsumen dan mendorong pembelian melalui WhatsApp. Website ini menampilkan produk parfum yang di-consume dari Contentful CMS.

## Tech Stack

- **React 18** - UI Library
- **TypeScript** - Type-safe JavaScript
- **Vite 6** - Build tool dan dev server
- **Contentful** - Headless CMS untuk produk
- **Font Awesome** - Icon library
- **ESLint** - Linting dan code quality

## Struktur Folder

```
src/
├── assets/            # Static assets (gambar, font, dll)
├── components/        # React components
│   ├── Hero/          # Hero section
│   ├── Why/           # Why section (mengapa memilih kami)
│   ├── ProductList/   # Daftar produk dari Contentful
│   ├── SocialProof/   # Testimonial dan trust badges
│   ├── CTA/           # Call to action section
│   ├── Footer/        # Footer
│   └── index.ts       # Barrel export
├── constants/         # Konstanta dan data statis
│   ├── index.ts       # Konfigurasi (WhatsApp, Contentful, dll)
│   └── data.ts        # Data statis (testimonials, reasons)
├── hooks/             # Custom React hooks
│   └── useParfumes.ts # Hook untuk fetch produk
├── lib/               # Library dan utilities
│   ├── contentful.ts  # Contentful client dan helper
│   └── utils.ts       # Utility functions
├── styles/            # Global styles
│   └── index.css      # CSS variables dan base styles
├── types/             # TypeScript type definitions
│   └── index.ts       # Type interfaces
├── App.tsx            # Root component
├── main.tsx           # Entry point
└── vite-env.d.ts      # Vite type declarations
```

## Fitur

- **Mobile Responsive** - Tampilan optimal di semua ukuran layar
- **Flat Design** - Desain modern dengan tema warna hijau
- **WhatsApp Integration** - Tombol CTA langsung ke WhatsApp dengan prefill text
- **Contentful CMS** - Produk di-manage melalui Contentful
- **Animasi** - Efek fade-in dan hover yang halus
- **SEO Ready** - Meta tags untuk optimasi mesin pencari

## Memulai

### Prasyarat

- Node.js 18+ 
- npm atau yarn

### Instalasi

1. Clone repository
```bash
git clone <repository-url>
cd parfume-website
```

2. Install dependencies
```bash
npm install
```

3. Jalankan development server
```bash
npm run dev
```

4. Buka browser di `http://localhost:5173`

## Scripts

| Script | Deskripsi |
|--------|-----------|
| `npm run dev` | Jalankan development server |
| `npm run build` | Build untuk production |
| `npm run preview` | Preview production build |
| `npm run lint` | Jalankan ESLint |
| `npm run lint:fix` | Perbaiki ESLint errors otomatis |
| `npm run type-check` | Cek TypeScript errors |

## Konfigurasi

### Contentful CMS

Fields yang digunakan:
- `name` - Nama parfum
- `description` - Deskripsi
- `price` - Harga (IDR)
- `category` - Kategori
- `image` - Gambar produk
- `featured` - Best seller flag

### WhatsApp

Nomor WhatsApp untuk CTA: `0812345768910`

## Color Palette

| Variable | Warna | Hex |
|----------|-------|-----|
| Primary Dark | Hijau Tua | `#1B5E20` |
| Primary | Hijau | `#2E7D32` |
| Primary Light | Hijau Muda | `#4CAF50` |
| Primary Lighter | Hijau Pastel | `#81C784` |
| Primary Lightest | Hijau Terang | `#C8E6C9` |
| Accent | Teal | `#00796B` |

## Sections

Website terdiri dari 6 section utama (sesuai prinsip AIDA):

1. **Hero** - Attention: Headline menarik dengan CTA
2. **Why** - Interest: 4 alasan memilih Baboo Parfume
3. **ProductList** - Interest/Desire: Daftar produk dari CMS
4. **SocialProof** - Desire: Testimonial dan trust badges
5. **CTA** - Action: Call to action utama
6. **Footer** - Informasi kontak dan links

## License

MIT License
