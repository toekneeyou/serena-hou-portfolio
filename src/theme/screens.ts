import { pxToRem } from "../lib/helpers/conversions";

export const sm = 640;
export const md = 768;
export const lg = 1024;
export const mbAir = 1280;
export const mb14 = 1512;
export const mb16 = 1728;

export const screens = {
  xs: pxToRem(0),
  sm: pxToRem(sm),
  md: pxToRem(md),
  lg: pxToRem(lg),
  xl: pxToRem(mbAir),
  "2xl": pxToRem(mb14),
  "3xl": pxToRem(mb16),
};
