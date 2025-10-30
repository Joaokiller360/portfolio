import type { Config } from "tailwindcss";
const { heroui } = require("@heroui/react");

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}", // Agregado para HeroUI
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        colorButton: "#7f5af0",
        sectionColor: '#242629',
        transparent: '#00000000'
      },
    },
  },
  plugins: [
    heroui({
      addCommonColors: true,
    }),
  ], // Agregado el plugin de HeroUI
} satisfies Config;
