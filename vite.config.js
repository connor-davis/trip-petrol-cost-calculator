import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import { VitePWA } from "vite-plugin-pwa";
import { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@src": resolve(__dirname, "src"),
    },
  },
  plugins: [
    solidPlugin(),
    VitePWA({
      registerType: "autoUpdate",
      srcDir: "src",
      base: "/",
      workbox: {
        cleanupOutdatedCaches: false,
        sourcemap: true,
      },
      id: "/",
      includeAssets: [
        "./src/robots.txt",
        "./src/assets/tripcost-x16.png",
        "./src/assets/tripcost-x32.png",
        "./src/assets/tripcost-x64.png",
        "./src/assets/tripcost-x128.png",
        "./src/assets/tripcost-x144.png",
        "./src/assets/tripcost-x256.png",
        "./src/assets/tripcost-x512.png",
      ],
      strategies: "injectManifest",
      manifest: {
        short_name: "TPCC",
        name: "Trip Petrol Cost Calculator",
        icons: [
          {
            src: "assets/tripcost-x16.png",
            sizes: "16x16",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "assets/tripcost-x32.png",
            sizes: "32x32",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "assets/tripcost-x64.png",
            sizes: "64x64",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "assets/tripcost-x128.png",
            sizes: "128x128",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "assets/tripcost-x144.png",
            sizes: "144x144",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "assets/tripcost-x256.png",
            sizes: "256x256",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "assets/tripcost-x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
        ],
        theme_color: "#000000",
        background_color: "#ffffff",
      },
    }),
  ],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
});
