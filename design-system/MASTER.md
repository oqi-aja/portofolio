# MASTER.md — Global Design System & Source of Truth

## 1. Design Identity & Philosophy
- **Style**: Premium Dark Glassmorphism (visionOS & macOS translucent materials).
- **Aesthetic**: Futuristic, high-end, translucent, layered depth, specular highlights, and sophisticated lighting.
- **Tone**: Professional developer dashboard, precise, clean, and accessible.

## 2. Color Palette & Background
- **Base Background**: Deep midnight navy (`#030712`).
- **Ambient Lighting**: 
  - Emerald glow (`#10b981` / `rgba(16, 185, 129, 0.15)`)
  - Cyan glow (`#06b6d4` / `rgba(6, 182, 212, 0.15)`)
  - Indigo/Violet accent (`#6366f1` / `rgba(99, 102, 241, 0.12)`)
- **Text Hierarchy**:
  - Primary: Pure White (`#ffffff`)
  - Secondary: Slate 300 (`#cbd5e1`)
  - Muted: Slate 400 (`#94a3b8`)
- **Accents**: Emerald-400 (`#34d399`), Cyan-400 (`#22d3ee`).

## 3. Glass Material Specifications
- **Primary Glass (Main Panels)**:
  - Background: `linear-gradient(135deg, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.03) 100%)`
  - Backdrop Blur: `backdrop-filter: blur(32px) saturate(210%)`
  - Border: `1px solid rgba(255, 255, 255, 0.24)` with bright top specular `border-top: 1px solid rgba(255, 255, 255, 0.4)`
  - Shadow: `inset 0 1px 0 0 rgba(255, 255, 255, 0.45), inset 0 -1px 0 0 rgba(255, 255, 255, 0.05), 0 25px 50px rgba(0, 0, 0, 0.5)`
- **Secondary Glass (Cards & Sub-panels)**:
  - Background: `linear-gradient(135deg, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0.02) 100%)`
  - Backdrop Blur: `backdrop-filter: blur(24px) saturate(190%)`
  - Border: `1px solid rgba(255, 255, 255, 0.16)`
- **Floating Glass (Navigation & Badges)**:
  - Background: `rgba(11, 15, 25, 0.75)` with `backdrop-filter: blur(20px)`

## 4. Typography
- **Headings & Body**: Plus Jakarta Sans (`font-sans`).
- **Code & Metrics**: JetBrains Mono (`font-mono`).
- **Line Height**: 1.6 for body text.

## 5. Accessibility & Performance
- **Contrast Ratio**: Meets WCAG AA minimum 4.5:1 for all text elements.
- **Focus States**: Visible emerald outline ring (`outline: 2px solid #34d399`, `outline-offset: 2px`).
- **Reduced Motion**: Respects `prefers-reduced-motion: reduce`.
