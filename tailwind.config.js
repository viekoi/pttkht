/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      spacing:{
        'medium':'100px',
        'small':'80px'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
