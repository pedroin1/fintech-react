/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        color_1: "#463220",
        color_2: "#66593c",
        color_3: "#eceadd",
        color_4: "#f7f8f5",
      },
      spacing: {
        small: "0.625rem",
        default: "1.25rem",
      },
    },
  },
  plugins: [],
};
