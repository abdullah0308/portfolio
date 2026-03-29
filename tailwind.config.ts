import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#0C6170",
          light: "#1A8A9A",
          dark: "#095260",
          muted: "#074850",
        },
        charcoal: {
          DEFAULT: "#1A1A1A",
          light: "#2A2A2A",
          mid: "#111111",
          deep: "#0A0A0A",
        },
        surface: "#1E1E1E",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      animation: {
        "bounce-slow": "bounce 2s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
