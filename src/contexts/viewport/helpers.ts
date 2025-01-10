import { lg, mb14, mb16, mbAir, md, sm } from "../../../tailwind.config";
import { ViewportSize } from "./types";

export const calculateViewportSize = () => {
  const { innerWidth } = window;
  if (innerWidth >= mb16) {
    return "3xl";
  } else if (innerWidth >= mb14) {
    return "2xl";
  } else if (innerWidth >= mbAir) {
    return "xl";
  } else if (innerWidth >= lg) {
    return "lg";
  } else if (innerWidth >= md) {
    return "md";
  } else if (innerWidth >= sm) {
    return "sm";
  } else {
    return "xs";
  }
};

export const isMobile = (vs: ViewportSize) => vs === "xs" || vs === "sm";
export const isTablet = (vs: ViewportSize) => vs === "md";
export const isDesktop = (vs: ViewportSize) =>
  vs === "lg" || vs === "xl" || vs === "2xl" || vs === "3xl";
