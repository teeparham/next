const colors = require("tailwindcss/colors");

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        brown: {
          100: "#f9f6f2",
          200: "#eee4da",
          300: "#cebda6",
          400: "#b59d87",
          700: "#776e65",
        },
      },
      screens: {
        sm: "520px",
      },
    },
  },
  plugins: [],
};

export default config;
