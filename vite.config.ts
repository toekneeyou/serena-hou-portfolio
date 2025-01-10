// import { defineConfig, UserConfig } from "vite";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  test: {
    environment: "jsdom",
    globals: true,
  },
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "src/app"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@constants": path.resolve(__dirname, "src/lib/constants"),
      "@contexts": path.resolve(__dirname, "src/contexts"),
      "@features": path.resolve(__dirname, "src/features"),
      "@helpers": path.resolve(__dirname, "src/lib/helpers"),
      "@hooks": path.resolve(__dirname, "src/lib/hooks"),
      "@services": path.resolve(__dirname, "src/lib/services"),
      "@store": path.resolve(__dirname, "src/store"),
      "@types": path.resolve(__dirname, "src/types"),
      "@views": path.resolve(__dirname, "src/views"),
    },
  },
});
