/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["'Archivo'", "sans-serif"],
    },
    extend: {
      extend: {
        colors: {
          // darkblue: rgb(45, 50, 80),
          // orange: "rgb(246, 177, 122)",
          // orange30: "rgba(246, 177, 122, 0.3)",
          // blue30: "rgb(112, 119, 161)",
          // blue: "rgb(66, 71, 105)",
        },
      },
      spacing: {
        1200: "75rem",
        800: "50rem",
      },
    },
  },
  plugins: [],
};
