/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0A0E1A',
        navy: '#12203E',
        graphite: '#1E293B',
        accent: '#EA580C',
        'accent-dark': '#C2410C',
        'accent-soft': '#FFF7ED',
        gold: '#B45309',
        muted: '#64748B',
        soft: '#F7F5F1',
        line: '#E5E1DA',
        cream: '#FBFAF7',
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
      },
      fontSize: {
        'hero': ['clamp(42px, 7.5vw, 88px)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'display': ['clamp(36px, 5vw, 64px)', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        'title': ['clamp(28px, 3.5vw, 44px)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      boxShadow: {
        card: '0 1px 2px rgba(15,23,42,0.04), 0 1px 3px rgba(15,23,42,0.06)',
        'card-hover': '0 12px 30px rgba(15,23,42,0.10), 0 4px 8px rgba(15,23,42,0.06)',
        premium: '0 30px 60px -20px rgba(10,14,26,0.35)',
      },
      borderRadius: {
        DEFAULT: '4px',
        md: '6px',
        lg: '8px',
        xl: '12px',
      },
      keyframes: {
        heroSlide: {
          from: { transform: 'translate3d(0, 14px, 0)' },
          to: { transform: 'translate3d(0, 0, 0)' },
        },
        markDraw: {
          '0%': { strokeDashoffset: '240' },
          '100%': { strokeDashoffset: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(234,88,12,0.45)' },
          '50%': { transform: 'scale(1.02)', boxShadow: '0 0 0 12px rgba(234,88,12,0)' },
        },
      },
      animation: {
        'hero-slide': 'heroSlide 0.8s ease both',
        'mark-draw': 'markDraw 1.4s ease-out forwards',
        'marquee': 'marquee 40s linear infinite',
        'pulse-subtle': 'pulseSubtle 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
