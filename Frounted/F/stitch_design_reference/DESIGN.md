---
name: LeadBridge
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#45464d'
  inverse-surface: '#263143'
  inverse-on-surface: '#ecf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#191c1e'
  on-tertiary-container: '#818486'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#e0e3e5'
  tertiary-fixed-dim: '#c4c7c9'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#444749'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d8e3fb'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style

This design system is built on the principles of **Precision Minimalism**. It targets B2B sales professionals who require a high-density, low-friction interface to manage complex lead pipelines. The aesthetic is clean, professional, and utilitarian, drawing inspiration from high-end productivity software.

The visual narrative prioritizes clarity and focus. It utilizes a refined corporate style that balances systematic efficiency with a premium feel. Key characteristics include expansive negative space, a restricted color palette, and sharp attention to alignment and hierarchy. The goal is to evoke a sense of stability, control, and institutional trust.

## Colors

The palette is anchored by a deep Navy Primary, suggesting depth and authority. Grays are used strategically to define hierarchy without adding visual noise.

- **Primary:** Used for core brand moments, primary actions, and active states.
- **Secondary/Neutral:** A spectrum of slate and blue-grays used for text, icons, and subtle UI borders.
- **Surface:** Backgrounds utilize very light grays (`#F8FAFC`) to keep the interface feeling airy and modern.
- **Functional:** Success, Warning, and Danger colors are calibrated for high legibility against white backgrounds, used strictly for status indicators and destructive actions.

## Typography

This design system uses **Inter** exclusively to ensure a systematic, neutral, and highly readable experience. The type scale is tight, favoring smaller jumps in size to accommodate information-dense CRM views.

- **Headlines:** Use semi-bold or bold weights with slight negative letter-spacing to appear more "locked-in" and authoritative.
- **Body:** Standardized at 14px and 16px for optimal balance between density and readability.
- **Labels:** Small labels use a medium weight or uppercase styling to distinguish metadata from actionable content.

## Layout & Spacing

The layout follows a **Fixed-Fluid Hybrid** model. Main application dashboards use a 12-column fluid grid with 24px gutters, but content is capped at a 1280px max-width to prevent line lengths from becoming unreadable on ultra-wide monitors.

A strict 4px/8px base unit rhythm is applied to all components. Internal padding for cards and sections should default to 24px (`lg`) to maintain a premium, spacious feel despite the professional context. On mobile devices, gutters and margins reduce to 16px (`md`) to maximize screen real estate.

## Elevation & Depth

Hierarchy is achieved primarily through **Tonal Layering** and **Low-Contrast Outlines** rather than heavy shadows.

- **Level 0 (Background):** Solid `#F8FAFC`.
- **Level 1 (Cards/Surface):** White background with a 1px border (`#E2E8F0`).
- **Level 2 (Dropdowns/Modals):** White background with a "Soft MD" shadow (0 4px 6px -1px rgb(0 0 0 / 0.1)) and a 1px border.
- **Interactive States:** Hovering over cards or buttons should trigger a subtle increase in shadow depth or a slight tint change to the border color. Shadows should always be neutral (gray-tinted), never colored.

## Shapes

The design system employs a **Rounded** shape language to soften the professional aesthetic and make the interface feel more modern and approachable.

- **Buttons & Inputs:** Use the default `rounded` (0.5rem) setting.
- **Cards & Sections:** Use `rounded-xl` (1.5rem) to create distinct visual containers.
- **Chips & Badges:** Use `rounded-full` (pill) for status indicators to differentiate them from actionable buttons.

## Components

### Buttons
- **Primary:** Solid Primary Blue background, white text. No gradient.
- **Secondary:** White background, 1px Gray-200 border, Dark Blue text.
- **Ghost:** No background or border, Slate text. Used for secondary navigation or "Cancel" actions.

### Input Fields
- Standard height: 40px. 
- Border: 1px Slate-200.
- Focus State: 1px Primary Blue border with a 2px Primary Blue soft outer ring (20% opacity).
- Use Lucide icons (20px) on the left of inputs for visual cues (e.g., Search, Mail).

### Cards
- Background: White.
- Border: 1px Slate-200.
- Corner Radius: 1.5rem (xl).
- Shadow: Subtle `sm` shadow to provide separation from the background.

### Chips & Status Badges
- **Success:** Emerald-50 background with Emerald-700 text.
- **Pending:** Amber-50 background with Amber-700 text.
- **Danger:** Crimson-50 background with Crimson-700 text.
- Shape: Fully rounded (pill).

### Lists & Data Tables
- Use a 1px horizontal border between rows.
- Header row: Slate-50 background, uppercase `label-sm` typography.
- Row hover: Very subtle Blue-50 background change.

### Navigation (Sidebar)
- Dark mode optional for the sidebar (Navy Primary background).
- Active state: Primary Blue vertical bar (4px width) on the left edge with a subtle background tint.