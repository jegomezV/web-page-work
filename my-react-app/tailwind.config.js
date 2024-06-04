/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color-bg1': '#02060D',
        'color-bg2': '#C1C9D9',
        'color-bg3': '#0B1726',
        'color-white': '#EBF0F2',
        'color-pink': '#A68D85',
      },
    },
  },
  plugins: [],
}

