import { defineConfig } from "vite";
import path from "node:path";

// https://vitejs.dev/config
export default defineConfig({
  build: {
    outDir: "dist/renderer",
    rollupOptions: {
      input: path.resolve(__dirname, "src/electron/renderer.ts"),
    },
  },
});
