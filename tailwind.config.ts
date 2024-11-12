const colors = require("tailwindcss/colors");

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  // Ensure dynamic colors are bundled
  safelist: [
    "bg-blue-500",
    "bg-red-500",
    "bg-green-500",
    "bg-white",
    "bg-black",
    "bg-yellow-400",
    "bg-purple-500",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        sm: "520px",
      },
    },
  },
  plugins: [],
};

export default config;
