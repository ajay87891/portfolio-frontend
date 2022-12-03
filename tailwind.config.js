/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./container/**/*.{js,ts,jsx,tsx}",
    "./wrapper/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      
        fontFamily: {
          'Quicksand': ['Quicksand', 'sans-serif']
        },
        // backgroundImage: {
        //   'menu-bg': "url('/public/bgWhite.png')",
        // }
    },
  },
  plugins: [],
}
