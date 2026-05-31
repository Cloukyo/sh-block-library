import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1f2326",
        paper: "#f6f3ee",
        bronze: "#9b7a4b"
      },
      boxShadow: {
        soft: "0 20px 70px rgba(31, 35, 38, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
