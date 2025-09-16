import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsPlugin from "vite-plugin-ts";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  server: {
    port: 9000,
  },
  plugins: [
    // The plugin below is required for hot reloading React application.
    react(),
    // The plugin below is required for typescript support in Vite.
    viteTsPlugin({
      tsconfig: "tsconfig.json",
    }),
    // The plugin below is required for importing SVG files as React components.
    svgr(),
  ],
});
