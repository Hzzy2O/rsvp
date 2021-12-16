import type { Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import legacyPlugin from '@vitejs/plugin-legacy'
import babel from 'vite-babel-plugin'
import { createHtmlPlugin } from './htmlPlugin'
import { configCompressPlugin } from './compress';
import vueJsx from '@vitejs/plugin-vue-jsx';

export function createPlugins(viteEnv, isBuild) {
  const {
    VITE_BUILD_COMPRESS,
    VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE,
  } = viteEnv;

  const vitePlugins: (Plugin | Plugin[])[] = [
    vue(),
    //@ts-ignore
    babel(),
    vueJsx(),
    legacyPlugin({
      targets: [
        'Android > 39',
        'Chrome >= 60',
        'Safari >= 10.1',
        'iOS >= 10.3',
        'Firefox >= 54',
        'Edge >= 15'
      ]
    }),
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) => {
            return `element-plus/lib/theme-chalk/${name}.css`
          }
        }
      ]
    })
  ]

  vitePlugins.push(createHtmlPlugin(viteEnv, isBuild))

  if (isBuild) {

    // rollup-plugin-gzip
    // vitePlugins.push(
    //   configCompressPlugin(VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE),
    // );

  }

  return vitePlugins
}
