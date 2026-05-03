import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        baronne: {
          forest: "#0d1f0e",
          lime: "#6abf3a",
          black: "#0a0a0a",
          white: "#ffffff"
        }
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "\"SF Pro Display\"",
          "\"SF Pro Text\"",
          "Inter",
          "Segoe UI",
          "sans-serif"
        ]
      },
      boxShadow: {
        glow: "0 0 40px rgba(106, 191, 58, 0.26)",
        glass: "0 20px 80px rgba(0, 0, 0, 0.32)"
      },
      backgroundImage: {
        "radial-lime": "radial-gradient(circle at 50% 0%, rgba(106, 191, 58, 0.25), transparent 38%)"
      }
    }
  },
  plugins: []
};

export default config;
