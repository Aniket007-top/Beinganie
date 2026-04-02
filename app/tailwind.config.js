/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-inter)'],
        mono: ['var(--font-inter)'],
      },
      colors: {
        // Google Material Design 3 inspired palette
        'background-primary': '#FFFFFF',
        'surface-secondary': '#F8F9FA',
        'border-subtle': '#DADCE0',
        'text-primary': '#1F2937', // Tailwind gray-900
        'text-secondary': '#4B5563', // Tailwind gray-600

        // Google Quad-Color Accents
        'google-blue': '#4285F4',
        'google-red': '#EA4335',
        'google-yellow': '#FBBC04',
        'google-green': '#34A853',

        // Existing accents mapped to Google colors for consistency
        ai: { DEFAULT: '#4285F4', soft: 'rgba(66, 133, 244, 0.1)' },
        iot: { DEFAULT: '#34A853', soft: 'rgba(52, 168, 83, 0.1)' },
        robotics: { DEFAULT: '#FBBC04', soft: 'rgba(251, 188, 4, 0.1)' },
      },
      boxShadow: {
        // Custom subtle shadow for elevation
        'soft-elevation': '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};