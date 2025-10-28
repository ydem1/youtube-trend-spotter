const { log } = require("util");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        default: "#ffffff",
        primary: "#9333EA",
        secondary: "#BE185D",
        background: "#0F172A",
        widget: "#181E2C",
      },
      boxShadow: {
        "primary-glow": "0 0 20px -5px theme('colors.primary')",
        "primary-glow-hover": "0 0 30px -5px theme('colors.primary')",
        "default-glow": "0 0 15px -5px theme('colors.default')",
        "default-glow-hover": "0 0 25px -5px theme('colors.default')",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      maxWidth: {
        360: "1440px",
      },
      borderRadius: {
        30: "30px",
      },
      screens: {
        default: "0px",
        xs: "450px",
        sm: "720px",
        md: "900px",
        lg: "1024px",
        xl: "1280px",
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
      },
    },
    plugins: [],
  },
};
