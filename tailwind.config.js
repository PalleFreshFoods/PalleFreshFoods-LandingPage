/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0d631b',
          container: '#cbffc2',
          fixed: '#0d631b',
        },
        secondary: {
          DEFAULT: '#2e7d32',
          container: '#9cf49c',
          fixed: '#0a5216',
        },
        tertiary: {
          DEFAULT: '#6a5200',
          container: '#f3c01a',
          'fixed-dim': '#f3c01a',
        },
        surface: {
          DEFAULT: '#fff8f6',
          variant: '#ddc4b9',
          container: {
            DEFAULT: '#ffe9e3',
            low: '#fff1ed',
            lowest: '#ffffff',
            high: '#ffe2da',
            highest: '#ffdbd0',
          },
        },
        background: '#fff8f6',
        'on-primary': '#ffffff',
        'on-surface': {
          DEFAULT: '#2c160e',
          variant: '#40493d',
        },
        outline: {
          DEFAULT: '#707a6c',
          variant: '#bfcaba',
        },
        accent: '#2d6a4f',
        'accent-hover': '#1b4332',
        muted: '#5a6f5e',
        border: '#d6e6d0',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['48px', { lineHeight: '56px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-lg': ['32px', { lineHeight: '40px', fontWeight: '600' }],
        'headline-md': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'label-lg': ['14px', { lineHeight: '20px', letterSpacing: '0.01em', fontWeight: '600' }],
        'label-sm': ['12px', { lineHeight: '16px', fontWeight: '500' }],
      },
      borderRadius: {
        sm: '0.25rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      maxWidth: {
        container: '1280px',
      },
      spacing: {
        gutter: '24px',
        'margin-mobile': '16px',
        'margin-desktop': '40px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: '0.8' },
          '100%': { transform: 'scale(2.4)', opacity: '0' },
        },
        flip: {
          '0%': { transform: 'rotateY(0)' },
          '100%': { transform: 'rotateY(180deg)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%, 100%': { 'background-position': '0% center' },
          '50%': { 'background-position': '200% center' },
        },
        'shine-sweep': {
          '0%': { transform: 'translateX(-120%) skewX(-12deg)' },
          '100%': { transform: 'translateX(220%) skewX(-12deg)' },
        },
        'border-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'fade-up': 'fade-up 0.7s ease-out forwards',
        'fade-in': 'fade-in 0.4s ease-out forwards',
        'bounce-slow': 'bounce 2.5s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 1.6s ease-out infinite',
        flip: 'flip 0.7s ease forwards',
        'scale-in': 'scale-in 0.3s ease-out forwards',
        shimmer: 'shimmer 4s ease-in-out infinite',
        'shine-sweep': 'shine-sweep 0.9s ease-out forwards',
        'border-spin': 'border-spin 6s linear infinite',
      },
      boxShadow: {
        soft: '0 4px 16px rgba(13, 99, 27, 0.08)',
        elevated: '0 12px 32px rgba(13, 99, 27, 0.12)',
        glass: '0 8px 32px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};
