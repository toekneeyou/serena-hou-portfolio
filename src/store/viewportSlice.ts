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
export const lgViewport = 1024;
export const xlViewport = 1280;
export const xxlViewport = 1536;
/**
 *
 *
 * Slice Types
 *
 *
 */
export type ViewportSize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | null;
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
const calculateViewportSize = () => {
  const { innerWidth } = window;
  if (innerWidth >= xxlViewport) {
    return "xxl";
  } else if (innerWidth >= xlViewport) {
    return "xl";
  } else if (innerWidth >= lgViewport) {
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
  vs === "lg" || vs === "xl" || vs === "xxl";
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
export const getViewportState = (state: RootState) => state.viewport;

export default viewportSlice.reducer;
