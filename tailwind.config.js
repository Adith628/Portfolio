/** @type {import('tailwindcss').Config} */
module.exports = {

  darkMode: 'class',

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      fontFamily:{
        cursive : "cursive",
      },
      invert:{
        
      },
   colors:{
      'foot':'#ffffff7a'
    },
    },
  },
  plugins: [],
}
