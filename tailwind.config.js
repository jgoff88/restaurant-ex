const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  theme: {
    fontFamily: {
      display: ["Pally", "Comic Sans MS", "sans-serif"],
      body: ["Pally", "Comic Sans MS", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: colors.black,
      primary: "#fff89a",
      secondary: "#ffc900",
      accent: "#086e7d",
      accent2: "#1a5f7a",
      gray: colors.gray,
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
