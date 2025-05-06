import { defineConfig } from "vite";

// https://vitejs.dev/config
export default defineConfig({
  build: {
    target: "node18",
    rollupOptions: {
      external: ["electron", "fs", "path"],
    },
  },
});
