/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primarylightest: '#F8F902',
        primarylighter: '#DBC602',
        primary: '#F1C40F',
        primarydarker: '#DB9A02',
        primarydarkest: '#F99602'
      },
      fontFamily: {
        sans: 'Montserrat'
      }
    },
  },
  plugins: [],
}
