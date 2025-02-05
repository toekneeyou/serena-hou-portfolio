import { Config } from "tailwindcss";

export const beige = "#E8DFD4";
export const taupe = "#706962";
export const charcoal = "#262525";
export const fog = "#EAEAEA";
export const black = "#000";
export const white = "#fff";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "small-laptop": "1024px",
        "macbook-air": "1280px",
        "macbook-14": "1512px",
        "macbook-16": "1728px",
      },
      animation: {
        "hero-film-marquee": "marquee-left 30s linear infinite",
        "brand-one-marquee": "marquee-left 60s linear infinite",
        "brand-two-marquee": "marquee-right 60s linear infinite",
      },
      backgroundImage: {
        header: "linear-gradient(rgba(0, 0, 0, 0.4), transparent)",
        brandsLeft: "linear-gradient(90deg, #262525, transparent)",
        brandsRight: "linear-gradient(90deg, transparent, #262525)",
      },
      colors: {
        beige,
        taupe,
        charcoal,
        fog,
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
      },
      keyframes: {
        "marquee-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-200%)" },
        },
        "marquee-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(200%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
