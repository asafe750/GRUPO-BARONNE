import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#22c55e",
          accent: "#4ade00",
          interactive: "#7ed321",
          black: "#0a0a0a",
          white: "#ffffff",
          muted: "#a1a1aa"
        },
        baronne: {
          forest: "#0d1f0e",
          lime: "#22c55e",
          black: "#0a0a0a",
          white: "#ffffff"
        }
      },
      fontFamily: {
        heading: ["var(--font-barlow-condensed)", "Arial Narrow", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 40px rgba(126, 211, 33, 0.28)",
        glass: "0 20px 80px rgba(0, 0, 0, 0.32)"
      },
      backgroundImage: {
        "radial-lime": "radial-gradient(circle at 50% 0%, rgba(34, 197, 94, 0.25), transparent 38%)",
        "green-grid":
          "linear-gradient(rgba(34,197,94,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.09) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
