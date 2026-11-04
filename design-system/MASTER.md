# MASTER.md — Global Design System & Source of Truth

## 1. Design Identity & Philosophy
- **Style**: Premium Dark Glassmorphism (visionOS & macOS translucent materials).
- **Aesthetic**: Futuristic, high-end, translucent, layered depth, specular highlights, and sophisticated lighting.
- **Tone**: Professional developer dashboard, precise, clean, and accessible.

## 2. Color Palette & Background
- **Base Background**: Full-viewport glassy mesh gradient (`#020617` base with multi-stop radial glows in emerald, cyan, and indigo).
- **Ambient Lighting & Refraction**: 
  - Translucent refractive orbs with `backdrop-blur-3xl`
  - Subtle grid mesh overlay (`rgba(255, 255, 255, 0.02)`)
- **Text Hierarchy**:
  - Primary: Pure White (`#ffffff`)
  - Secondary: Slate 300 (`#cbd5e1`)
  - Muted: Slate 400 (`#94a3b8`)
- **Accents**: Emerald-400 (`#34d399`), Cyan-400 (`#22d3ee`).

## 3. Glass Material Specifications
- **Primary Glass (Main Panels & Hero)**:
  - Background: `rgba(255, 255, 255, 0.035)`
  - Backdrop Blur: `backdrop-filter: blur(5px) saturate(150%)`
  - Border: `1px solid rgba(255, 255, 255, 0.16)` with top highlight `border-top: 1px solid rgba(255, 255, 255, 0.25)`
  - Shadow: `inset 0 1px 0 rgba(255, 255, 255, 0.18), 0 8px 30px rgba(0, 0, 0, 0.08)`
- **Secondary Glass (Cards & Sub-panels)**:
  - Background: `rgba(255, 255, 255, 0.025)`
  - Backdrop Blur: `backdrop-filter: blur(4px) saturate(140%)`
  - Border: `1px solid rgba(255, 255, 255, 0.12)`
- **Floating Glass (Navigation & Badges)**:
  - Background: `rgba(15, 23, 42, 0.25)` with `backdrop-filter: blur(6px)`

## 4. Typography
- **Headings & Body**: Plus Jakarta Sans (`font-sans`).
- **Code & Metrics**: JetBrains Mono (`font-mono`).
- **Line Height**: 1.6 for body text.

## 5. Accessibility & Performance
- **Contrast Ratio**: Meets WCAG AA minimum 4.5:1 for all text elements.
- **Focus States**: Visible emerald outline ring (`outline: 2px solid #34d399`, `outline-offset: 2px`).
- **Reduced Motion**: Respects `prefers-reduced-motion: reduce`.
