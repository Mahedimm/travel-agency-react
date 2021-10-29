module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    textColor: {
      'black': '#000000',
      'yellow': '#FFE500',
      'red': '#EF2853',
      'white':'#FFFFFF'
    },
    backgroundImage: {
      'home1': "url('/src/images/background1.png')",
      
     }
  },

  variants: {
    extend: {},
  },
  plugins: [],
}
