import { pxToRem } from "../lib/helpers/conversions";
import { px } from "./px";

export const headerHeightMobile = 80;
export const headerHeightTablet = 88;

export const height = {
  "header-mobile": pxToRem(headerHeightMobile),
  "header-tablet": pxToRem(headerHeightTablet),
  ...px,
};
