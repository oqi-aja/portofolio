const assert = require('assert');
const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');

// 1. Data profil & repositori
assert(html.includes('oqi_tfkr'), 'Harus memuat username oqi_tfkr');
assert(html.includes('oqi-aja'), 'Harus memuat handle oqi-aja');
assert(html.includes('drone-live-engine'), 'Harus memuat repositori drone-live-engine');
assert(html.includes('StudentHub'), 'Harus memuat repositori StudentHub');
assert(html.includes('puzzel-game'), 'Harus memuat repositori puzzel-game');
assert(html.includes('cartcup'), 'Harus memuat repositori cartcup');

// 2. Aksesibilitas & Responsivitas
assert(html.includes('min-h-[44px]'), 'Tombol interaktif harus memenuhi target sentuh minimum 44px (WCAG)');
assert(html.includes('focus-ring'), 'Harus menyediakan styling focus-ring untuk navigasi keyboard');
assert(html.includes('aria-label'), 'Harus menyediakan atribut aksesibilitas aria-label');
assert(html.includes('overflow-x: hidden') || html.includes('overflow-x-hidden'), 'Harus mengisolasi overflow horizontal');
assert(html.includes('viewport-fit=cover'), 'Harus mendukung viewport-fit=cover untuk safe-area mobile');

// 3. Logika Fungsi & UX
assert(html.includes('clearSearchInput'), 'Harus memiliki fungsi reset/clear input pencarian');
assert(html.includes('btn-clear-search'), 'Harus memiliki tombol clear search');
assert(html.includes('initCategoryCounts'), 'Harus menginisialisasi jumlah badge filter secara dinamis');
assert(html.includes('empty-state'), 'Harus memiliki state kosong ketika pencarian tidak ditemukan');

console.log('Semua pengujian kelayakan dan logika dashboard lulus!');
