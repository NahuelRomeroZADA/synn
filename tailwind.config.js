/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {

    extend: {
      fontFamily: {
        'general' : ['GeneralSans-Variable', 'sans-serif'],
        'switzer' : ['Switzer-Variable', 'sans-serif'],
        'Satoshi' : ['Satoshi-Variable', 'sans-serif'],
      },
      fontSize: {
        'title' : ['clamp(3rem, 14vw, 9rem)'],
      },
      colors: {
        'transparent':'transparent',
        'secondary-100': '#FAFAF9',
        'secondary-600': '#8C8C73',
        'secondary-700': '#70705C',
      }
    },
  },
  plugins: [],
}


