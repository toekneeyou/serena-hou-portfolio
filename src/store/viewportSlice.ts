import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
/**
 *
 *
 * Slice Variables
 *
 *
 */
export const smViewport = 640;
export const mdViewport = 768;
export const smLaptop = 1024;
export const mbAir = 1280;
export const mb14 = 1512;
export const mb16 = 1728;
/**
 *
 *
 * Slice Types
 *
 *
 */
export type ViewportSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | null;
export interface ViewportState {
  viewportSize: ViewportSize;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}
/**
 *
 * Slice Helpers
 *
 */
export const calculateViewportSize = () => {
  const { innerWidth } = window;
  if (innerWidth >= mb16) {
    return "3xl";
  } else if (innerWidth >= mb14) {
    return "2xl";
  } else if (innerWidth >= mbAir) {
    return "xl";
  } else if (innerWidth >= smLaptop) {
    return "lg";
  } else if (innerWidth >= mdViewport) {
    return "md";
  } else if (innerWidth >= smViewport) {
    return "sm";
  } else {
    return "xs";
  }
};
const isMobile = (vs: ViewportSize) => vs === "xs" || vs === "sm";
const isTablet = (vs: ViewportSize) => vs === "md";
const isDesktop = (vs: ViewportSize) =>
  vs === "lg" || vs === "xl" || vs === "2xl" || vs === "3xl";
/**
 *
 *
 * Slice setup
 *
 */
const initialViewportSize = calculateViewportSize();
const viewportInitialState: ViewportState = {
  viewportSize: initialViewportSize,
  isMobile: isMobile(initialViewportSize),
  isTablet: isTablet(initialViewportSize),
  isDesktop: isDesktop(initialViewportSize),
};
export const viewportSlice = createSlice({
  name: "viewport",
  initialState: viewportInitialState,
  reducers: {
    setViewportSize: (state, action: PayloadAction<ViewportSize>) => {
      if (state.viewportSize === action.payload) return state;
      state.viewportSize = action.payload;
      state.isMobile = isMobile(action.payload);
      state.isTablet = isTablet(action.payload);
      state.isDesktop = isDesktop(action.payload);
    },
  },
});
/**
 *
 *
 * Slice actions
 *
 *
 */
export const { setViewportSize } = viewportSlice.actions;
/**
 *
 *
 * Slice selectors
 *
 *
 */
export const getViewportSize = (state: RootState) =>
  state.viewport.viewportSize;
export const getIsMobile = (state: RootState) => state.viewport.isMobile;
export const getIsTablet = (state: RootState) => state.viewport.isTablet;
export const getIsDesktop = (state: RootState) => state.viewport.isDesktop;

export default viewportSlice.reducer;
