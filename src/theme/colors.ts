import { PluginUtils } from "tailwindcss/types/config";

export const beige = "#E8DFD4";
export const taupe = "#706962";
export const charcoal = "#262525";
export const fog = "#EAEAEA";
export const black = "#000";
export const white = "#FFF";

export const colors = (theme: PluginUtils) => ({
  btn: {
    default: "white",
    disabled: theme.colors.neutral[500],
  },
  beige,
  taupe,
  charcoal,
  fog,
});
