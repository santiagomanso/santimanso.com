/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#17181B',
        secondary: '#94A4B4',
        variant1: '#343A41',
        variant2: '#22262A',
        github: '#22272E',
        cta: '##1988E1',
      },
      fontFamily: {
        console: 'Inconsolata',
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
    },
  },
  plugins: [],
}
