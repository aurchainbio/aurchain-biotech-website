import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#102b2a",
        pine: "#164b46",
        teal: "#247d72",
        mint: "#d8eee9",
        fog: "#f3f8f6",
        gold: "#c8a96a"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(16, 43, 42, 0.09)"
      }
    }
  },
  plugins: []
};

export default config;
