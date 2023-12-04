/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // MEDIA QUERIES
    screens: {
      sm: "360px",
      md: "768px",
      xl: "1024px",
      xxl: "1280px",

      smOnly: { max: "767.98px" },
      mdOnly: { min: "768px", max: "1023.98px" },
      xlOnly: { min: "1023.98px", max: "1279.98px" },
      notXxl: { max: "1279.98px" },
    },
    // THEME
    extend: {
      // FONTS
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      // COLORS
      colors: {
        body: "#f8f8f8",
        primary: {
          DEFAULT: "#f4e041",
          hover: "#ffe302",
        },
        secondary: "#00bdd3",
        black: {
          DEFAULT: "#000000",
          light: "#000000de",
        },
        white: {
          DEFAULT: "#ffffff",
          light: "#ffffffde",
        },
        gray: { 100: "#d0cfcf", 200: "#b4b4b4", 300: "#7e7e7e" },
        red: "#cb3d40",
      },
    },
  },
  plugins: [],
};
