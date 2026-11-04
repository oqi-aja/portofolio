# dashboard.md — Dashboard Page Overrides & Component Specifications

## 1. Page Context
- **Target**: Portfolio & System Dashboard (`index.html`).
- **Inheritance**: Inherits all rules from `design-system/MASTER.md`.

## 2. Component Layout & Glass Guidelines
- **Navigation Header (`header`)**:
  - Floating glass header with `backdrop-blur-xl`, border bottom `rgba(255, 255, 255, 0.15)`.
- **Hero Profile Section**:
  - Primary glass surface (`glass-surface`), featuring high-translucency gradient, noise overlay, and specular reflections (`shine-effect`).
- **Metric Bento Grid**:
  - Secondary glass cards (`glass-surface interactive-card`) with hover elevation and border illumination.
- **Spotlight Architecture Panel**:
  - Prominent glass container with telemetry simulation bars and animated equalizer indicators (`animate-eq-1`, etc.).
- **Project Catalog & Search**:
  - Filter buttons with active emerald state (`bg-emerald-500 text-slate-950`) and subtle glass inactive state.
  - Search input with high contrast border and clear button.
  - Project cards featuring language badges, tag chips, and clone URL clipboard copy.
- **Skills Matrix**:
  - Grid of secondary glass cards detailing technical stack proficiency.

## 3. Interaction & Animation Rules
- **Hover Transitions**: `transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);`
- **Hover Lift**: `transform: translateY(-4px) scale(1.01);`
- **Reflection Shine**: Diagonal light sweep via `.shine-effect::after`.
