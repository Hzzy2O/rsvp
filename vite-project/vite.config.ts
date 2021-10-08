import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default ({ mode }) =>
  defineConfig({
    plugins: [
      vue(),
      vueJsx(),
    ],
    base: mode === "development" ? "/" : "./",
    server: {
      port: 8888,
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "/src"),
      },
    },
  });
