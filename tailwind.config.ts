import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#063D36",
        pine: "#063D36",
        teal: "#2E7D32",
        mint: "#D9ECE3",
        fog: "#EEF7F3",
        gold: "#9ABF78",
        slate: "#5F6B6D"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(6, 61, 54, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
