import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist-react",
  },
  base: "./",
  server: {
    port: 5173,
    strictPort: true,
  },
});
