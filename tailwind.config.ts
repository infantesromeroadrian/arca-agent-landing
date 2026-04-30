import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0D1B2A",
        navyDarker: "#08111C",
        primary: "#7BB3FF",
        accent: "#00E5FF",
      },
      fontFamily: {
        mono: ['"Courier Prime"', "monospace"],
        serif: ['"Cormorant"', "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
