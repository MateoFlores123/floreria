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
        gold: {
          50:  "#fdf9ed",
          100: "#f9efca",
          200: "#f3db8b",
          300: "#edc44f",
          400: "#e8b027",
          500: "#d4920f",
          600: "#b8720b",
          700: "#92530d",
          800: "#784113",
          900: "#653615",
        },
        obsidian: {
          DEFAULT: "#0a0a0a",
          50:  "#f5f5f5",
          100: "#e8e8e8",
          200: "#c8c8c8",
          300: "#a0a0a0",
          400: "#6e6e6e",
          500: "#3d3d3d",
          600: "#2a2a2a",
          700: "#1a1a1a",
          800: "#111111",
          900: "#0a0a0a",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body:    ["var(--font-body)", "sans-serif"],
        accent:  ["var(--font-accent)", "serif"],
      },
      animation: {
        "fade-up":    "fadeUp 0.8s ease forwards",
        "fade-in":    "fadeIn 1s ease forwards",
        "shimmer":    "shimmer 2.5s infinite",
        "float":      "float 6s ease-in-out infinite",
        "spin-slow":  "spin 20s linear infinite",
        "slide-left": "slideLeft 0.6s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-12px)" },
        },
        slideLeft: {
          "0%":   { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #d4920f 0%, #f3db8b 50%, #d4920f 100%)",
        "dark-gradient": "linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)",
        "hero-pattern":  "radial-gradient(ellipse at 20% 50%, #1a1500 0%, #0a0a0a 60%)",
      },
      boxShadow: {
        gold:    "0 0 30px rgba(212, 146, 15, 0.3)",
        "gold-lg": "0 0 60px rgba(212, 146, 15, 0.4)",
        elegant: "0 20px 60px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;