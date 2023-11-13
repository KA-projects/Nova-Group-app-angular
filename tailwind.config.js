/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "primary-green": "#024638",
        "light-green": "#61b15a",
        gold: "#988064",
        "metallic-gold": "#bd9b60",
        "gray-34": "#343434",
        "gray-107": "#6b7280",
        snow: "#f5f8f7",
      },
    },
    fontFamily: {
      kanit: ["Kanit", "sans-serif"],
      "bebas-neue": ["Bebas Neue", "sans-serif"],
      orbitron: ["Orbitron", "sans-serif"],
    },
  },
  plugins: [],
};
