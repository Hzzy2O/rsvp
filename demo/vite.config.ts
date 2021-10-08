import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import styleImport from "vite-plugin-style-import";

// https://vitejs.dev/config/
export default ({ mode }) =>
  defineConfig({
    plugins: [
      vue(),
      vueJsx(),
      styleImport({
        libs: [
          {
            libraryName: '@nutui/nutui',
            libraryNameChangeCase: 'pascalCase',
            resolveStyle: (name) => {
              return `@nutui/nutui/dist/packages/${name}/index.scss`
            }
          }
        ],
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@nutui/nutui/dist/styles/variables.scss";`
        }
      }
    },
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
