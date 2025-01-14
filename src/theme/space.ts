import { pxToRem } from "../lib/helpers/conversions";
import { headerHeightTablet, headerHeightMobile } from "./height";

export const space = {
  "header-mobile": pxToRem(headerHeightMobile),
  "header-tablet": pxToRem(headerHeightTablet),
  "page-gutter": pxToRem(32),
};
