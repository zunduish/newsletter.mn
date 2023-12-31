/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      Literata: ["Literata", "cursive"],
      OktaNeue: ["OktaNeue", "cursive"],
    },
    colors: {
      "default-yellow": "#FFC20E",
      "linear-pink": "#FF2EDC",
      "linear-blue": "#2E4BFF",
      "linear-sky": "#2EFFEC",
      "default-green": "#24A148",
      orange: {
        50: "#ffe4d7",
        100: "#fdcab0",
        200: "#ffb28b",
        300: "#ff9a68",
        400: "#ff8649",
        500: "#ff7029",
        600: "#d94f0a",
        700: "#ca4604",
        800: "#b83e01",
        900: "#a63700",
      },
      neutral: {
        0: "#ffffff",
        50: "#f3f3f3",
        100: "#e3e2e2",
        200: "#c6c5c5",
        300: "#aaa8a8",
        400: "#8e8b8b",
        500: "#716f6f",
        600: "#555353",
        700: "#393737",
        800: "#1cl1b1b",
        900: "#000000",
      },
      success_green: {
        50: "#defbe6",
        100: "#a7f0ba",
        200: "#6fdc8c",
        300: "#42be65",
        400: "#24a148",
        500: "#198038",
        600: "#0e6027",
        700: "#044317",
        800: "#022d0d",
        900: "#071908",
      },
    },
    textColor: {
      "default-yellow": "#FFC20E",
      "linear-pink": "#FF2EDC",
      "linear-blue": "#2E4BFF",
      "linear-sky": "#2EFFEC",
      "default-green": "#24A148",
      orange: {
        50: "#ffe4d7",
        100: "#fdcab0",
        200: "#ffb28b",
        300: "#ff9a68",
        400: "#ff8649",
        500: "#ff7029",
        600: "#d94f0a",
        700: "#ca4604",
        800: "#b83e01",
        900: "#a63700",
      },
      neutral: {
        0: "#ffffff",
        50: "#f3f3f3",
        100: "#e3e2e2",
        200: "#c6c5c5",
        300: "#aaa8a8",
        400: "#8e8b8b",
        500: "#716f6f",
        600: "#555353",
        700: "#393737",
        800: "#1cl1b1b",
        900: "#000000",
      },
      success_green: {
        50: "#defbe6",
        100: "#a7f0ba",
        200: "#6fdc8c",
        300: "#42be65",
        400: "#24a148",
        500: "#198038",
        600: "#0e6027",
        700: "#044317",
        800: "#022d0d",
        900: "#071908",
      },
    },
    extend: {},
    screens: {
      sx: "100px",
      sm: "480px",
      md: "769px",
      lg: "1280px",
      xl: "1440px",
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
