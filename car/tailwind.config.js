/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        overAll: '#ffef9f',
        sectionBG: '#f2e8cf',
        heading: '#bc4749',
        paragraph: '#ebf2fa',
        darkBlue: "#1B4282",
        lightBlue: "#BDD6FF",
        overlayBg: "rgba(0,0,0,0.3)"
      },
      backgroundImage: {
        'parallax': 'url("./src/assets/LR.png")'
      }
    },

  },
  plugins: [],
}

