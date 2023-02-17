/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      'sans': ['Roboto', 'sans-serif'],
      'heading': ['Lato', 'sans-serif']
    },
    extend: {
      backgroundImage:{
        'headerImg': "url('src/assets/headerBgImg.jpg')",
      }
    },
  },
  plugins: [],
}