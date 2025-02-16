import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue500: "var(--blue500)",
        blue900: "var(--blue900)",
        orange400: "var(--orange400)",
        orange500: "var(--orange500)",
        orange800: "var(--orange800)",
        orange900: "var(--orange900)",
      },
      backgroundImage: {
        "hero-background": "url('/images/hero-bg.png')",
      },
      animation: {
        "line-grow": "line-grow 1s ease-out forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
