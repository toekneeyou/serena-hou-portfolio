import { backgroundColor } from "./src/theme/backgroundColor";
import { fontFamily } from "./src/theme/fontFamily";
import { fontSize } from "./src/theme/fontSize";
import { colors } from "./src/theme/colors";
import { height } from "./src/theme/height";
import { Config } from "tailwindcss";
import { screens } from "./src/theme/screens";
import { zIndex } from "./src/theme/zIndex";

export const headerHeight = "5rem";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor,
      colors,
      fontFamily,
      fontSize,
      height,
      screens,
      zIndex,
    },
  },
  plugins: [],
};

export default config;
