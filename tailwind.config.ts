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
        blue100: "var(--blue100)",
        blue500: "var(--blue500)",
        blue900: "var(--blue900)",
        blue1000: "var(--blue1000)",
        orange400: "var(--orange400)",
        orange500: "var(--orange500)",
        orange800: "var(--orange800)",
        orange900: "var(--orange900)",
        gray400: "var(--gray400)",
        green800: "var(--green800)",
      },
      backgroundImage: {
        "hero-background": "url('/images/hero-bg.png')",
      },
      animation: {
        "line-grow": "line-grow 1s ease-out forwards",
        "accordion-down-slow": "accordion-down-slow 0.2s ease-out",
        "accordion-up-slow": "accordion-up-slow 0.2s ease-out",
      },
      keyframes: {
        "accordion-down-slow": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up-slow": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
