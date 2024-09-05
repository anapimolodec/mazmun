/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["'Work Sans'", "sans-serif"],
    },
    extend: {
      colors: {
        qara: "#2D3250",
        sary: "#F6B17A",
        kokshil: "#7077A1",
        kok: "#424769",
      },
    },
  },
  plugins: [],
};
