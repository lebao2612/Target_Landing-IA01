/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      backgroundImage:{
        hover: "url('/images/screenshot-hover.png')",
      },
    },
  },
  plugins: [],
}

