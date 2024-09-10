/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["'Archivo'", "sans-serif"],
    },
    extend: {
      colors: {
        darkblue: "#2D3250",
        orange: "#F6B17A",
        orange30: "#4DF6B17A",
        blue30: "#4D7077A1",
        blue: "#424769",
      },
      spacing: {
        1200: "75rem",
      },
    },
  },
  plugins: [],
};
