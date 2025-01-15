import { pxToRem } from "../lib/helpers/conversions";
import { px } from "./px";

export const headerHeightMobile = 80;
export const headerHeightTablet = 88;
export const footerHeightMobile = 152;
export const footerHeightTablet = 164;
export const footerHeightDesktop = 200;

export const height = {
  "header-mobile": pxToRem(headerHeightMobile),
  "header-tablet": pxToRem(headerHeightTablet),
  "footer-mobile": pxToRem(footerHeightMobile),
  "footer-tablet": pxToRem(footerHeightTablet),
  "footer-desktop": pxToRem(footerHeightDesktop),
  ...px,
};
