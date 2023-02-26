/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./assets/coffe.png')",
        about: "url('./assets/about.png')",
        about1: "url('./assets/about1.png')",
        product: "url('./assets/product.png')",
        product1: "url('./assets/product1.png')",
        product2: "url('./assets/product2.png')",
        taste: "url('./assets/taste.png')",
        round: "url('./assets/round.png')",
        round1: "url('./assets/round1.png')",
        round2: "url('./assets/round2.png')",
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
