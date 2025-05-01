/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        forum: ["'Forum'", "sans-serif"],
        assistant: ["'Assistant'", "sans-serif"],
        karma: ["'Karma'", "serif"],
        questrial: ["'Questrial'", "sans-serif"],
        magnolia: ["'Magnolia Script'", "cursive"],
        gfs: ["'GFS Artemisia'", "serif"],
        opensans: ["'Open Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
