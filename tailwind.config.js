/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        aerven: {
          black: '#030712',
          surface: '#080C14',
          'surface-light': '#0D131F',
          card: 'rgba(15, 23, 42, 0.65)',
          'card-hover': 'rgba(23, 37, 84, 0.4)',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(56, 189, 248, 0.35)',
          blue: '#00A3FF',
          cyan: '#38BDF8',
          'blue-dark': '#0284C7',
          silver: '#E2E8F0',
          slate: '#94A3B8',
          muted: '#64748B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(0, 163, 255, 0.15)',
        'glow-md': '0 0 30px rgba(0, 163, 255, 0.2)',
        'glow-lg': '0 0 60px rgba(0, 163, 255, 0.25)',
        'card-hover': '0 10px 40px -10px rgba(0, 163, 255, 0.15)',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-flow': 'glowFlow 8s ease-in-out infinite alternate',
      },
      keyframes: {
        glowFlow: {
          '0%': { opacity: '0.4', transform: 'scale(1)' },
          '100%': { opacity: '0.7', transform: 'scale(1.08)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
