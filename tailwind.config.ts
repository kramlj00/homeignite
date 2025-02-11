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
        orange400: "var(--orange400)",
        orange500: "var(--orange500)",
        orange900: "var(--orange900)",
      },
      backgroundImage: {
        "hero-background": "url('/images/hero-bg.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
