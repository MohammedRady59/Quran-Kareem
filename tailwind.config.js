/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "540px",
          md: "720px",
          lg: "960px",
          xl: "1140px",
          "2xl": "1320px",
        },
      },
      animation: {
        scroll: "scroll 24s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      fontFamily: {
        base: ["thuluth-decorated", "sans-serif"],
        main: ["cairo-bold", "serif"],
      },
      colors: {
        green: "#43a047",
      },
    },
  },
  plugins: [],
};
