import { useContext } from "react";
import { MenuStateContext, MenuActionContext } from "./MenuContext";

export const useMenuState = () => {
  const menuState = useContext(MenuStateContext);
  if (!menuState) {
    throw new Error("useViewportState must be used under a ViewportProvider");
  }
  return menuState;
};

export const useMenUActions = () => {
  const menuActions = useContext(MenuActionContext);
  if (!menuActions) {
    throw new Error("useViewportState must be used under a ViewportProvider");
  }
  return menuActions;
};
