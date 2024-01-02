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
        main: "#685951", //#080A1A
        subMain: "#867a74", //#F20000
        dry: "#a49b97", //#0B0F29
        star: "#FFB000", //#FFB000
        text: "#FFFFFF", //#C0C0C0
        border: "#c3bdb9", //#4b5563
        dryGray: "#e1dedc", //#E0D5D5
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
