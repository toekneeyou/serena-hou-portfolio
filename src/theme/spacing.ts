import { pxToRem } from "../lib/helpers/conversions";
import { headerHeightTablet, headerHeightMobile } from "./height";
import { px } from "./px";

export const spacing = {
  "header-mobile": pxToRem(headerHeightMobile),
  "header-tablet": pxToRem(headerHeightTablet),

  "gutter-xs": pxToRem(8),
  "gutter-sm": pxToRem(16),
  "gutter-md": pxToRem(24),
  "gutter-lg": pxToRem(32),
  "gutter-xl": pxToRem(40),
  "gutter-2xl": pxToRem(48),
  "gutter-3xl": pxToRem(56),
  ...px,
};
