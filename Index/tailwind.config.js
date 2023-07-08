/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sfprodisplay: ["SF Pro Display", "Arial", "sans-serif"],
      poppins: ["Poppins"],
    },

    extend: {},
  },
  plugins: [require("tailwindcss-font-inter")],
};
