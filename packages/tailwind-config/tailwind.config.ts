import { type Config } from "tailwindcss";

export default {
  content: [
    "../../ui/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "1600px",
      },
    },
  },
  plugins: [],
} satisfies Config;
