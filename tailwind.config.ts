import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: "#FF6B35",
          50: "#FFF3EE",
          100: "#FFE4D6",
          200: "#FFCAAD",
          300: "#FFA97F",
          400: "#FF8A54",
          500: "#FF6B35",
          600: "#F04E14",
          700: "#C93D0D",
          800: "#A33110",
          900: "#862B12",
        },
        dark: {
          DEFAULT: "#0A0A0F",
          50: "#F0F0F5",
          100: "#E0E0EB",
          200: "#C4C4D6",
          300: "#9B9BB5",
          400: "#6E6E8A",
          500: "#4D4D69",
          600: "#33334D",
          700: "#1E1E30",
          800: "#141420",
          900: "#0A0A0F",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-20px) rotate(3deg)" },
          "66%": { transform: "translateY(-10px) rotate(-2deg)" },
        },
        glow: {
          "0%": { filter: "drop-shadow(0 0 10px rgba(255,107,53,0.4))" },
          "100%": { filter: "drop-shadow(0 0 30px rgba(255,107,53,0.9))" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-orange": "linear-gradient(135deg, #FF6B35 0%, #F04E14 100%)",
        "gradient-dark": "linear-gradient(180deg, #0A0A0F 0%, #141420 100%)",
        "grid-pattern":
          "linear-gradient(rgba(255,107,53,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,53,0.06) 1px, transparent 1px)",
        "noise-pattern": "url('/noise.svg')",
      },
      backgroundSize: {
        grid: "60px 60px",
      },
      boxShadow: {
        orange: "0 0 40px rgba(255,107,53,0.3)",
        "orange-lg": "0 0 80px rgba(255,107,53,0.4)",
        card: "0 4px 24px rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
