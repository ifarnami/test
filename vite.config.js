import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     "/api/": "https://ecommerce-api.liara.run",
  //     "/uploads/": "https://ecommerce-api.liara.run",
  //   },
  // },
  build: {
    outDir: "./build",
  },
});
