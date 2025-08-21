/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Theme Colors (from RNM logo)
        'rnm-purple': {
          900: '#1E1228',    // Dark purple - backgrounds
          800: '#2D1B3D',    // Logo background purple
          700: '#4C1D5F',    // Dark purple - cards/sections
          600: '#7C3AED',    // Medium purple - borders
          500: '#8B5CF6',    // Logo purple - primary actions
          400: '#A855F7',    // Bright purple - accents
          300: '#C084FC',    // Light purple - hover states
        },
        // Neutral Colors
        'rnm-neutral': {
          900: '#0F0F0F',    // Pure black - text
          800: '#1F1F23',    // Charcoal - secondary text
          700: '#374151',    // Gray - muted text
          400: '#9CA3AF',    // Silver - placeholder text
          100: '#F8F7F4',    // Bone white - primary text
        },
        // Accent Colors
        'rnm-success': '#10B981',    // Online status, success states
        'rnm-info': '#3B82F6',       // Information, links
        'rnm-warning': '#F59E0B',    // Warnings, queue status
        'rnm-danger': '#EF4444',     // Errors, offline status
        
        // Gaming-specific Colors
        'neon-green': '#00FF88',     // Cyberpunk accent
        'electric-blue': '#00D4FF',  // Sci-fi accent
        'skull-white': '#F8F7F4',    // Logo skull color
      },
      fontFamily: {
        'primary': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'gaming': ['Orbitron', 'monospace'],
        'display': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'xs': '0.75rem',    // 12px
        'sm': '0.875rem',   // 14px  
        'base': '1rem',     // 16px
        'lg': '1.125rem',   // 18px
        'xl': '1.25rem',    // 20px
        '2xl': '1.5rem',    // 24px
        '3xl': '1.875rem',  // 30px
        '4xl': '2.25rem',   // 36px
        '5xl': '3rem',      // 48px
        '6xl': '4rem',      // 64px
      },
      spacing: {
        '1': '0.25rem',   // 4px
        '2': '0.5rem',    // 8px
        '3': '0.75rem',   // 12px
        '4': '1rem',      // 16px
        '6': '1.5rem',    // 24px
        '8': '2rem',      // 32px
        '12': '3rem',     // 48px
        '16': '4rem',     // 64px
        '20': '5rem',     // 80px
        '24': '6rem',     // 96px
        '32': '8rem',     // 128px
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)' 
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(139, 92, 246, 0.6)' 
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'slide-up': {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(60px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #2D1B3D 0%, #8B5CF6 50%, #A855F7 100%)',
        'gradient-hero': 'linear-gradient(180deg, rgba(45, 27, 61, 0.9) 0%, rgba(30, 18, 40, 0.95) 100%)',
      },
      boxShadow: {
        'glow': '0 0 30px rgba(139, 92, 246, 0.3)',
        'glow-lg': '0 0 50px rgba(139, 92, 246, 0.4)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
