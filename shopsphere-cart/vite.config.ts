import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { federation } from "@module-federation/vite";

export default defineConfig({
 plugins: [
  vue(),

  federation({
    name: "cart",
    filename: "remoteEntry.js",
    manifest: true,

    exposes: {
      "./Cart": "./src/cart-entry.ts",
    },

    shared: ["vue"],

    library: {
      type: "module",
    },
  }),
],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  server: {
    port: 3002,
    strictPort: true,
    origin: "http://localhost:3002",
  },

  base: "/",

  build: {
    target: "esnext",
  },
});