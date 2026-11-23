/**
 * AERVENLabs Official Design Tokens
 * Premium White-First Design Architecture:
 * - Primary Background: #FFFFFF
 * - Secondary Background: #F7F8FA
 * - Soft Section Background: #F1F3F6
 * - Primary Text: #101828
 * - Secondary Text: #667085
 * - Primary Accent: #315EFA (Engineering Blue)
 * - Secondary Accent: #7657E8 (Future Violet)
 * - Borders: #E6E9EF
 * - Subtle Highlights: #DCE5FF
 */

export const colors = {
  background: '#FFFFFF',
  secondaryBackground: '#F7F8FA',
  softBackground: '#F1F3F6',
  primaryText: '#101828',
  secondaryText: '#667085',
  primaryAccent: '#315EFA',
  secondaryAccent: '#7657E8',
  border: '#E6E9EF',
  subtleHighlight: '#DCE5FF',
  white: '#FFFFFF',
  surfaceCard: '#FFFFFF',
  surfaceHover: '#F7F8FA',
} as const;

export const motionTokens = {
  easing: {
    cinematic: 'cubic-bezier(0.16, 1, 0.3, 1)',
    cinematicBezier: [0.16, 1, 0.3, 1] as [number, number, number, number],
    smooth: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
  },
  duration: {
    micro: 0.2,     // 200ms
    ui: 0.3,        // 300ms
    cinematic: 0.65, // 650ms
  },
} as const;

export const layout = {
  maxContainerWidth: 1440,
  gutters: {
    mobile: 20,
    tablet: 32,
    desktop: 48,
    desktopLarge: 64,
    desktopUltra: 80,
  },
  grid: {
    columns: 12,
    gapMobile: 20,
    gapDesktop: 32,
  },
} as const;

export const typography = {
  fontFamily: 'Geist Variable, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
  weights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  tracking: {
    display: '-0.035em',
    heading: '-0.025em',
    body: '-0.005em',
    eyebrow: '0.12em',
    technical: '0.15em',
  },
} as const;

export const borders = {
  radius: {
    none: '0px',
    xs: '4px',
    sm: '6px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '9999px',
  },
  width: {
    hairline: '1px',
    standard: '1px',
    accent: '2px',
  },
} as const;

export const shadows = {
  subtle: '0 1px 3px 0 rgba(16, 24, 40, 0.04), 0 1px 2px 0 rgba(16, 24, 40, 0.02)',
  card: '0 2px 6px -1px rgba(16, 24, 40, 0.05), 0 1px 4px -1px rgba(16, 24, 40, 0.03)',
  cardHover: '0 12px 28px -4px rgba(16, 24, 40, 0.08), 0 4px 12px -2px rgba(16, 24, 40, 0.03)',
  elevated: '0 20px 32px -8px rgba(16, 24, 40, 0.1), 0 8px 16px -4px rgba(16, 24, 40, 0.04)',
  glowBlue: '0 0 24px -4px rgba(49, 94, 250, 0.18)',
} as const;

export const accessibility = {
  minTouchTarget: 48,
} as const;
