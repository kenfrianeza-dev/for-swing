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
        primary: '#FF008D',
        secondary: '#FFCEE9',
        tertiary: '#7B0044',
        lightGray: '#D7D7D7',
        midGray: '#2C2C2C',
        darkGray: '#111111',
      }
    },
  },
  plugins: [],
};
export default config;
