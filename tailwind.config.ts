import { backgroundColor } from "./src/theme/backgroundColor";
import { borderColor } from "./src/theme/borderColor";
import { borderWidth } from "./src/theme/borderWidth";
import { boxShadow } from "./src/theme/boxShadow";
import { fontFamily } from "./src/theme/fontFamily";
import { fontSize } from "./src/theme/fontSize";
import { colors } from "./src/theme/colors";
import { height } from "./src/theme/height";
import { spacing } from "./src/theme/spacing";
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
      borderWidth,
      boxShadow,
      colors,
      fontFamily,
      fontSize,
      height,
      screens,
      spacing,
      width,
      maxWidth: width,
      zIndex,
    },
  },
  plugins: [],
};

export default config;
