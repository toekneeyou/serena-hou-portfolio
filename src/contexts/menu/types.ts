export interface MenuStateValues {
  isMenuOpen: boolean;
}

export interface MenuActionValues {
  openMenu: () => void;
  toggleMenu: () => void;
  closeMenu: () => void;
}
