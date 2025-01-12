import { createContext, FC, PropsWithChildren, useMemo, useState } from "react";
import { MenuActionValues, MenuStateValues } from "./types";

export const MenuStateContext = createContext<MenuStateValues | null>(null);
export const MenuActionContext = createContext<MenuActionValues | null>(null);

export const MenuProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuStateValues: MenuStateValues = useMemo(() => {
    return {
      isMenuOpen,
    };
  }, [isMenuOpen]);

  const menuActionValues: MenuActionValues = useMemo(() => {
    return {
      openMenu: () => setIsMenuOpen(true),
      toggleMenu: () => setIsMenuOpen((p) => !p),
      closeMenu: () => setIsMenuOpen(false),
    };
  }, [setIsMenuOpen]);

  return (
    <MenuStateContext.Provider value={menuStateValues}>
      <MenuActionContext.Provider value={menuActionValues}>
        {children}
      </MenuActionContext.Provider>
    </MenuStateContext.Provider>
  );
};
