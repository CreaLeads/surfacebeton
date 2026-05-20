/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1B2A4A',
        accent: '#EA580C',
        'accent-dark': '#C2410C',
        muted: '#64748B',
        soft: '#F8FAFC',
        line: '#E2E8F0',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      fontSize: {
        'display': ['72px', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-md': ['56px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-sm': ['40px', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.08)',
        'card-hover': '0 8px 24px rgba(15,23,42,0.10)',
        nav: '0 1px 0 #E2E8F0',
      },
      borderRadius: {
        DEFAULT: '6px',
        md: '6px',
        lg: '8px',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(234,88,12,0.45)' },
          '50%': { transform: 'scale(1.02)', boxShadow: '0 0 0 12px rgba(234,88,12,0)' },
        },
        logoIn: {
          '0%': { transform: 'rotate(-5deg)', opacity: '0' },
          '100%': { transform: 'rotate(0deg)', opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fadeInUp 0.8s ease both',
        'fade-in': 'fadeIn 0.8s ease both',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'pulse-subtle': 'pulseSubtle 2.4s ease-in-out infinite',
        'logo-in': 'logoIn 0.6s ease both',
      },
    },
  },
  plugins: [],
};
