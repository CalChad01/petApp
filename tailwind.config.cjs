/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fly: {
          '0%': { transform: 'translate(-100)' },
          '100%': { transform: 'translate(3000px)'},
        }
      },
      backgroundImage: {
        'doghouse': "url('/src/Assets/doghouse.jpg')",
      },
    },
  },
  plugins: [],
}