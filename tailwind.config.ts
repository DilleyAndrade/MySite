import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-dark": "#242526",
        "bg-light": "#EDEDED",
        "image-dark": "#3A3B3C",
        "image-light": "#D4D4D4",
        "menu-dark": "#18191A",
        "menu-light": "#FFFFFF",
        "main-color": "#0866FF"
      }
    },
  },
  plugins: [],
};
export default config;
