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

export const headerHeight = "5rem";
const mobileContainerWidth = "20rem";

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
        mango: ["MangoGrotesque", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
      },
      fontSize: {
        8: "0.5rem",
        10: "0.625rem",
        12: "0.75rem",
        14: "0.875rem",
        16: "1rem",
        18: "1.125rem",
        20: "1.25rem",
        22: "1.375rem",
        24: "1.5rem",
        26: "1.625rem",
        28: "1.75rem",
        30: "1.875rem",
        32: "2rem",
        36: "2.25rem",
        40: "2.5rem",
        44: "2.75rem",
        48: "3rem",
        52: "3.25rem",
        56: "3.5rem",
        60: "3.75rem",
        64: "4rem",
        68: "4.25rem",
        72: "4.5rem",
        76: "4.75rem",
        80: "5rem",
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
      width: {
        "mobile-container": mobileContainerWidth,
      },
      maxWidth: {
        "mobile-container": mobileContainerWidth,
      },
    },
  },
  plugins: [],
};

export default config;
