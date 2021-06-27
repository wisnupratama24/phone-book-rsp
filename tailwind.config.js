const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      defaultGray: "#BCBCBC",
      grayBackground : "#EAE7E7",
      defaultRed: "#E94560",
      defaultDarkBlue : '#05466A',
      transparent: "transparent",
      current: "currentColor",
      black : "#000",
      white: "#FFF",
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.sky,
      yellow: colors.amber,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
