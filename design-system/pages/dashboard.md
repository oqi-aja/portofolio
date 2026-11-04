# dashboard.md — Dashboard Page Overrides & Component Specifications

## 1. Page Context
- **Target**: Portfolio & System Dashboard (`index.html`).
- **Inheritance**: Inherits all rules from `design-system/MASTER.md`.

## 2. Component Layout & Glass Guidelines
- **Navigation Header (`header`)**:
  - Floating clear glass header with `backdrop-blur-sm` (`blur(6px)`), highly transparent background `rgba(15, 23, 42, 0.25)`, and crisp border.
- **Hero Profile Section**:
  - Ultra-clear primary glass (`glass-surface`), featuring high transparency (`rgba(255,255,255,0.035)`), minimal blur (`5px`), and vivid background visibility.
- **Metric Bento Grid**:
  - Secondary ultra-clear glass cards (`glass-surface interactive-card`) allowing background gradients to shine directly through.
- **Spotlight Architecture Panel**:
  - Prominent clear glass container showcasing maximum transparency with live telemetry indicators.
- **Project Catalog & Search**:
  - Filter buttons and search input styled with ultra-clear transparent glass surfaces.
- **Skills Matrix**:
  - Grid of secondary ultra-clear glass cards detailing technical stack proficiency with unobstructed background colors.

## 3. Interaction & Animation Rules
- **Hover Transitions**: `transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);`
- **Hover Lift**: `transform: translateY(-4px) scale(1.01);`
- **Reflection Shine**: Diagonal light sweep via `.shine-effect::after`.
