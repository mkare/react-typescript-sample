import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const resolve = (dir: string) => path.resolve(__dirname, dir);
const aliases = {
  "@": resolve("src"),
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "./runtimeConfig", replacement: "./runtimeConfig.browser" },
      ...Object.entries(aliases).map(([find, replacement]) => ({
        find,
        replacement,
      })),
    ],
  },
});
