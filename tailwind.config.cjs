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
      colors:{
        'primaryBlue': "#3b82f6",
        'primaryRose': "#7f292d"
      },
      backgroundImage:{
        'headerImg': "url('src/assets/headerBgImg.jpg')",
        'secImg1': "url('src/assets/tapes.jpg')",
        'secImg2': "url('src/assets/maskpro.jpg')",
        'secImg3': "url('src/assets/doowon.png')",
        'homeBg': "url('src/assets/headerBgImg.jpg')"
      }
    },
  },
  plugins: [],
}