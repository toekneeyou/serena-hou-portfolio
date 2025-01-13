import { backgroundColor } from "./src/theme/backgroundColor";
import { borderColor } from "./src/theme/borderColor";
import { fontFamily } from "./src/theme/fontFamily";
import { fontSize } from "./src/theme/fontSize";
import { colors } from "./src/theme/colors";
import { height } from "./src/theme/height";
import { padding } from "./src/theme/padding";
import { Config } from "tailwindcss";
import { screens } from "./src/theme/screens";
import { width } from "./src/theme/width";
import { zIndex } from "./src/theme/zIndex";

export const headerHeight = "5rem";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor,
      borderColor,
      colors,
      fontFamily,
      fontSize,
      height,
      padding,
      screens,
      width,
      maxWidth: width,
      zIndex,
    },
  },
  plugins: [],
};

export default config;
