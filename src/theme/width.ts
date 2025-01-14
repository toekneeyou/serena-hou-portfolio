import { pxToRem } from "../lib/helpers/conversions";
import { px } from "./px";

export const width = {
  "mobile-container": pxToRem(320),
  "tablet-container": pxToRem(680),
  "desktop-container": pxToRem(1196),
  ...px,
};
