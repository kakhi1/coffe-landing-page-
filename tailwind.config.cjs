/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./assets/coffe.png')",
        about: "url('./assets/about.png')",
        about1: "url('./assets/about1.png')",
      },
      
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Source: ["Source Serif Pro", "serif"],
      },
      colors: {
        textColor: "#50382C",
      },
    },
  },
  plugins: [],
};
