/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["'Archivo'", "sans-serif"],
    },
    extend: {
      spacing: {
        1200: "75rem",
        800: "50rem",
      },
    },
  },
  plugins: [],
};
