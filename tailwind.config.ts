import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
    },
    extend: {
      fontFamily: {
        brule: ["var(--font-brule)"],
        satoshi: ["var(--font-satoshi)"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: "#0B0100",
        white: "#F9F8F3",
        orange: "#FF2F13",
        grey: "#A89F9A",
        blue: "#A8C2E0",
        sand: "#E5DCD7",
      },
    },
  },
  plugins: [],
};
export default config;
