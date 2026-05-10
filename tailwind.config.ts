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
        background: "#F8FAFC",
        foreground: "#0F172A",
        brand: {
          50: "#f0f9f9",
          100: "#d9eeee",
          200: "#b9dfdf",
          300: "#8cc7c7",
          400: "#5ba6a6",
          500: "#3d8a8a",
          600: "#2d6b6b",
          700: "#275858",
          800: "#234949",
          900: "#213f3f",
          950: "#102525",
        },
        surface: {
          DEFAULT: "#ffffff",
          muted: "#f1f5f9",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-outfit)", "sans-serif"],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'card': '0 10px 30px -5px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
};
export default config;
