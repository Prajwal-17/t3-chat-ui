/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background,313.8 24.5% 10.4%))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        "border": "hsl(var(--border))",
        "chat-border": "hsl(var(--chat-border),333.3 22% 16.1%)",
        "chat-background": "hsl(var(--chat-background,270 16.13% 12.16%))",
      }
    },
  },
  plugins: [],
}