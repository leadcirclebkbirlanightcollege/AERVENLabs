/**
 * AervenLabs Official Design Tokens
 * Single source of programmatic truth for monochrome colors, layout scales,
 * typography hierarchy, and motion easing parameters.
 */

export const colors = {
  black: '#000000',
  nearBlack: '#0A0A0A',
  surfaceDark: '#141414',
  surfaceElevated: '#1C1C1C',
  borderSubtle: '#262626',
  mutedText: '#8A8A8A',
  secondaryText: '#A3A3A3',
  lightGray: '#D4D4D4',
  white: '#FFFFFF',
} as const;

export const motion = {
  easing: {
    cinematic: 'cubic-bezier(0.16, 1, 0.3, 1)',
    cinematicBezier: [0.16, 1, 0.3, 1] as [number, number, number, number],
    smooth: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
  },
  duration: {
    micro: 0.2,     // 200ms
    ui: 0.3,        // 300ms
    cinematic: 0.7, // 700ms
  },
} as const;

export const layout = {
  maxContainerWidth: 1536,
  gutters: {
    mobile: 24,
    tablet: 32,
    desktop: 64,
    desktopLarge: 80,
  },
  grid: {
    columns: 12,
    gapMobile: 24,
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
    display: '-0.04em',
    heading: '-0.025em',
    body: '0em',
    eyebrow: '0.15em',
    technical: '0.18em',
  },
  lineHeight: {
    display: 0.95,
    heading: 1.15,
    body: 1.65,
    technical: 1.3,
  },
} as const;

export const borders = {
  radius: {
    none: '0px',
    architectural: '2px',
    component: '4px',
  },
  width: {
    hairline: '1px',
  },
} as const;

export const accessibility = {
  minTouchTarget: 48, // 48px minimum touch area
} as const;
