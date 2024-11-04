import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
        sand: "#E5DCD7",
      },
    },
  },
  plugins: [],
};
export default config;
