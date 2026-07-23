/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.css',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#0B0B0F',
        charcoal: '#1A1A1F',
        'charcoal-mid': '#141418',
        mercury: '#C4C7CC',
        'mercury-dim': '#8A8D92',
        lilac: '#D4C1EC',
        'rose-gold': '#E8B4B8',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      letterSpacing: {
        'widest-2': '0.25em',
        'widest-3': '0.35em',
      },
    },
  },
  plugins: [],
};