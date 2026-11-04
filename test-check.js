const assert = require('assert');
const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');

// Check key profile info
assert(html.includes('oqi_tfkr'), 'Harus memuat username oqi_tfkr');
assert(html.includes('oqi-aja'), 'Harus memuat handle oqi-aja');
assert(html.includes('drone-live-engine'), 'Harus memuat repositori drone-live-engine');
assert(html.includes('StudentHub'), 'Harus memuat repositori StudentHub');
assert(html.includes('puzzel-game'), 'Harus memuat repositori puzzel-game');
assert(html.includes('cartcup'), 'Harus memuat repositori cartcup');

// Check accessibility requirements
assert(html.includes('min-h-[44px]'), 'Tombol interaktif harus memenuhi minimum touch target 44px');
assert(html.includes('focus-ring'), 'Harus menyertakan penanganan focus-ring untuk navigasi keyboard');
assert(html.includes('aria-label'), 'Harus memiliki atribut aksesibilitas aria-label');

console.log('Semua pengujian portofolio dashboard lulus!');
