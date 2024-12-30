import { Config } from "tailwindcss";

export const beige = "#E8DFD4";
export const taupe = "#706962";
export const charcoal = "#262525";
export const fog = "#EAEAEA";
export const black = "#000";
export const white = "#FFF";

export const sm = 640;
export const md = 768;
export const lg = 1024;
export const mbAir = 1280;
export const mb14 = 1512;
export const mb16 = 1728;

const headerHeight = "6.25rem";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: `0px`,
        sm: `${sm}px`,
        md: `${md}px`,
        lg: `${lg}px`,
        xl: `${mbAir}px`,
        "2xl": `${mb14}px`,
        "3xl": `${mb16}px`,
      },
      animation: {
        "hero-film-marquee": "marquee-left 30s linear infinite",
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
        "ghost-writer-primary": "#387845",
        "ghost-writer-secondary": "#D1E1D4",
        "str-primary": "#61A9FF",
        "str-secondary": "#F2F2F2",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
      },
      keyframes: {},
      height: {
        header: headerHeight,
      },
      zIndex: {
        header: "100",
        "header-content": "2",
        "header-gradient": "1",
        "mobile-menu": "0",
        "hero-text": "1",
        "hero-visual": "0",
      },
    },
  },
  plugins: [],
};

export default config;
