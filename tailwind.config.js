/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        border: {
          DEFAULT: '#E6E9EF',
          subtle: '#E6E9EF',
          strong: '#D0D5DD',
        },
        input: '#E6E9EF',
        ring: '#315EFA',
        background: {
          DEFAULT: '#FFFFFF',
          secondary: '#F7F8FA',
          soft: '#F1F3F6',
        },
        foreground: '#101828',
        surface: {
          DEFAULT: '#FFFFFF',
          secondary: '#F7F8FA',
          soft: '#F1F3F6',
          elevated: '#FFFFFF',
        },
        primary: {
          DEFAULT: '#101828',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#F7F8FA',
          foreground: '#101828',
        },
        brand: {
          blue: '#315EFA',
          violet: '#7657E8',
          highlight: '#DCE5FF',
          dark: '#101828',
          gray: '#667085',
        },
        accent: {
          DEFAULT: '#315EFA',
          foreground: '#FFFFFF',
          secondary: '#7657E8',
          highlight: '#DCE5FF',
        },
        muted: {
          DEFAULT: '#F7F8FA',
          foreground: '#667085',
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#101828',
        },
        popover: {
          DEFAULT: '#FFFFFF',
          foreground: '#101828',
        },
      },
      borderRadius: {
        none: '0px',
        xs: '4px',
        sm: '6px',
        DEFAULT: '8px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '20px',
        full: '9999px',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        heading: ['var(--font-heading)', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.025em',
        normal: '0em',
        wide: '0.04em',
        wider: '0.08em',
        widest: '0.14em',
      },
      transitionTimingFunction: {
        cinematic: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        micro: '200ms',
        ui: '300ms',
        cinematic: '650ms',
      },
      boxShadow: {
        subtle: '0 1px 3px 0 rgba(16, 24, 40, 0.04), 0 1px 2px 0 rgba(16, 24, 40, 0.02)',
        card: '0 2px 6px -1px rgba(16, 24, 40, 0.05), 0 1px 4px -1px rgba(16, 24, 40, 0.03)',
        cardHover: '0 12px 28px -4px rgba(16, 24, 40, 0.08), 0 4px 12px -2px rgba(16, 24, 40, 0.03)',
        elevated: '0 20px 32px -8px rgba(16, 24, 40, 0.1), 0 8px 16px -4px rgba(16, 24, 40, 0.04)',
        glowBlue: '0 0 24px -4px rgba(49, 94, 250, 0.18)',
      },
    },
  },
  plugins: [],
};
