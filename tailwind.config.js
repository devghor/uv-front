const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        light: colors.emerald["400"],
        DEFAULT: colors.emerald["500"],
        dark: colors.emerald["600"],
        ...colors.emerald,
      },
      secondary: {
        light: colors.rose["400"],
        DEFAULT: colors.rose["500"],
        dark: colors.rose["600"],
        ...colors.rose,
      },
      ternary: {
        light: colors.violet["400"],
        DEFAULT: colors.violet["500"],
        dark: colors.violet["600"],
        ...colors.violet,
      },
      transparent: "transparent",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      purple: colors.violet,
    },
    fontFamily: {
      primary: ["'Hind Siliguri', sans-serif"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
