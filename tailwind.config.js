/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['"Rubik"', "sans-serif"],
        lato: ["Lato", "sans-serif"],
        roboto: ['"Roboto"', "sans-serif"],
      },
      colors: {
        "primary-100": "#4640DE",
        "blue-100": "#26A4FF",

        "neutrals-0": "#FFFFFF",
        "neutrals-10": "#F8F8FD",
        "neutrals-60": "#AAACB0",
        "neutrals-80": "#515B6F",
        "neutrals-100": "#25324B",

        "neutrals-20": "#D6DDEB",
        "neutrals-40": "#A8ADB7",
        "dark-100": "#202430",
      },

      content: {
        rectangle: "url('./assets/shapes/rectangle.svg')",
        rectanglesLeft: "url('./assets/shapes/rectangles-left.svg')",
        rectangleSmall: "url('./assets/shapes/rectangle-small-reviews.svg')",
        rectanglesBig: "url('./assets/shapes/rectangle-big-reviews.svg')",
      },
    },
  },
  plugins: [],
};
