import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        background: "var(--background)",
        text: "var(--text)",
        pinappleBG: '#ffe94d',
        strawberryBG: '#ff6699',
        grapeBG: '#c77dff',
        appleBG: '#a4ff3d',
      },
    },
  },
  plugins: [],
} satisfies Config;
