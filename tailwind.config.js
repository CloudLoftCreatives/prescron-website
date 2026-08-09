/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0B1220',
          800: '#0e1a2e',
          700: '#122040',
        },
        brand: {
          blue: '#2563EB',
          'blue-bright': '#3B82F6',
          teal: '#20C997',
          'teal-light': '#34d9ac',
        },
        surface: {
          bg: '#F7F9FC',
          card: '#FFFFFF',
          border: '#E2E8F4',
        },
        text: {
          primary: '#111827',
          secondary: '#475569',
          muted: '#8898aa',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(44px, 7vw, 84px)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'hero-sm': ['clamp(36px, 5vw, 60px)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section': ['clamp(28px, 4vw, 48px)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at 70% 30%, rgba(37,99,235,0.08) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(32,201,151,0.06) 0%, transparent 50%)',
        'dark-gradient': 'linear-gradient(135deg, #0B1220 0%, #0e1a2e 50%, #0d1f38 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(247,249,252,0.9) 100%)',
      },
      boxShadow: {
        'premium': '0 4px 24px rgba(17,24,39,0.08), 0 1px 4px rgba(17,24,39,0.04)',
        'premium-lg': '0 16px 64px rgba(17,24,39,0.12), 0 4px 16px rgba(17,24,39,0.06)',
        'video': '0 32px 96px rgba(11,18,32,0.22), 0 8px 32px rgba(11,18,32,0.12)',
        'glow-blue': '0 0 60px rgba(37,99,235,0.15), 0 0 120px rgba(37,99,235,0.06)',
        'glow-teal': '0 0 40px rgba(32,201,151,0.2)',
        'phone': '0 32px 80px rgba(11,18,32,0.30), 0 8px 24px rgba(11,18,32,0.15)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.7s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}
