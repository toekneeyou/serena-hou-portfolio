import { useContext } from "react";
import { ViewportStateContext } from "./ViewportContext";

export const useViewportState = () => {
  const viewportState = useContext(ViewportStateContext);
  if (!viewportState) {
    throw new Error("useViewportState must be used under a ViewportProvider");
  }
  return viewportState;
};
