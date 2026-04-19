/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        navy: {
          950: '#030712',
          900: '#0d1427',
          800: '#111d3a',
          700: '#162248',
        },
      },
    },
  },
  plugins: [],
}