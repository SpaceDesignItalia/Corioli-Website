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
      },
      keyframes: {
        'pop-in': {
          '0%': { opacity: '0', transform: 'scale(0.4)' },
          '70%': { transform: 'scale(1.15)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        // Tracciato ECG della home: il nastro contiene due copie identiche,
        // spostarlo di metà larghezza chiude il ciclo senza salti.
        'ecg-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'pop-in': 'pop-in 0.25s ease-out both',
        // 3 battiti ogni 2,5 s = 72 bpm, la frequenza attorno a cui oscilla il widget.
        'ecg-scroll': 'ecg-scroll 2.5s linear infinite',
      }
    },
  },
  plugins: [],
};
export default config;
