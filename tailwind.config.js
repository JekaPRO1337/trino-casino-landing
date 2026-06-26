/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./PL/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Arial Black"', "Impact", "Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        trino: {
          navy: "#060719",
          ink: "#090a20",
          purple: "#3532B8",
          violet: "#8023DE",
          cyan: "#83E1FF",
          yellow: "#FFE500"
        }
      },
      boxShadow: {
        glass: "0 26px 90px rgba(0,0,0,.38)",
        neon: "0 0 42px rgba(131,225,255,.26)"
      }
    }
  },
  plugins: []
};
