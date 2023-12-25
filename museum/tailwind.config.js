/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        header: "560px",
        rate: "400px",
      },
      fontSize: {
        h1: "2.6rem",
      },
      screens: {
        xs: "475px",
      },
      colors: {
        main: "#080A1A", //#080A1A
        subMain: "#F20000", //#F20000
        dry: "#0B0F29", //#0B0F29
        star: "#FFB000", //#FFB000
        text: "#C0C0C0", //#C0C0C0
        border: "#4b5563", //#4b5563
        dryGray: "#E0D5D5", //#E0D5D5
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
