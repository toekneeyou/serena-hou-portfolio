import { PluginUtils } from "tailwindcss/types/config";

export const backgroundColor = (theme: PluginUtils) => ({
  btn: {
    default: "transparent",
    hover: theme.colors.neutral[600],
    active: theme.colors.neutral[700],
    disabled: theme.colors.neutral[300],
  },
});
