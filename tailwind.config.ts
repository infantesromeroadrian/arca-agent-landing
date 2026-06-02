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
        // ARCA Agent palette — legacy aliases preserve existing class semantics
        navy: "#1a0820",
        navyDarker: "#1f0d2e",
        primary: "#ffd9ea",
        accent: "#ff2d8a",
        // explicit ARCA tokens (preferred for new code)
        "arca-bg": "#1a0820",
        "arca-surface": "#1f0d2e",
        "arca-border": "#3a1f4a",
        "arca-fg": "#ffd9ea",
        "arca-magenta": "#ff2d8a",
        "arca-fuchsia": "#ff4488",
        "arca-blush": "#ffb4d8",
        "arca-shadow": "#0a0214",
        // Brand/accent
        brand: "#ff2d8a",
        "brand-hover": "#ff4488",
        coral: "#ff4488",
        "tab-active": "#ff2d8a",
        "syntax-pink": "#ff6b9d",
        "syntax-green": "#b388eb",
      },
      fontFamily: {
        mono: ['"Satoshi"', '"Courier Prime"', "monospace"],
        serif: ['"Clash Display"', '"Cormorant"', "serif"],
        display: ['"Clash Display"', "system-ui", "sans-serif"],
        body: ['"Satoshi"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
