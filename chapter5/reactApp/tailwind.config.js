/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#ffc221",
        navBg: "#002839",
        navSubBg: "#002E42",
        reddish: "#e82d2d",
        limeGreen: "#009455",
        cardBf: "#F2F7F8",
      },
      fontFamily: {
        mn: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
