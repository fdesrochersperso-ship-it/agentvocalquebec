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
        primary: {
          DEFAULT: "#1B365D",
          light: "#2A4A7F",
          dark: "#0F2341",
        },
        accent: {
          DEFAULT: "#C4713B",
          light: "#D4915F",
          dark: "#A85C2F",
        },
        surface: "#FFFFFF",
        background: "#FAFAF7",
        border: {
          DEFAULT: "#E2E0DB",
          strong: "#C8C5BE",
        },
      },
      fontFamily: {
        display: ["DM Serif Display", "Georgia", "serif"],
        body: ["Source Sans 3", "Source Sans Pro", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      fontSize: {
        hero: ["3.5rem", { lineHeight: "1.1" }],
        stat: ["3rem", { lineHeight: "1.0" }],
      },
    },
  },
  plugins: [],
};

export default config;
