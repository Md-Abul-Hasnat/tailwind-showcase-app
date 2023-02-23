/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    screens: {
      xsm: "380px",
      sm: "550px",

      md: "720px",

      lg: "900px",

      xl: "1100px",

      "2xl": "1536px",
    },
  },
  extend: {
    colors: {
      headingClr: "#222",
      textGrayClr: "#565656",
      whiteBg: "#ffffff",
      primaryBg: "#f6f9fe",
      primaryClr: "#7c4fe0",
    },
  },

  plugins: [],
};
