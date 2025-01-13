import { pxToRem } from "../lib/helpers/conversions";
import { headerHeightTablet, headerHeightMobile } from "./height";

export const padding = {
  "header-mobile": pxToRem(headerHeightMobile),
  "header-tablet": pxToRem(headerHeightTablet),
};
