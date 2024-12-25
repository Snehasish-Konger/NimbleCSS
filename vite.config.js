import { defineConfig } from "vite";

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/base/_variables.scss";`, // Corrected path
      },
    },
  },
  server: {
    open: true,
  },
});
