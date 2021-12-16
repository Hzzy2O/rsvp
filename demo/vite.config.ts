import type { UserConfig, ConfigEnv } from 'vite';

import { loadEnv } from 'vite'
import { resolve } from 'path';
import { createPlugins } from './build/vite/plugins'
import { wrapperEnv } from './build/utils';
// import { createProxy } from './build/vite/proxy';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

export default ({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  const { VITE_PORT } = wrapperEnv(env)

  const isBuild = mode === 'production'

  return {
    plugins: createPlugins(env, isBuild),

    /**
     * 在生产中服务时的基本公共路径。
     * @default '/'
     */
    base: '/',
    /**
     * 与“根”相关的目录，构建输出将放在其中。如果目录存在，它将在构建之前被删除。
     * @default 'dist'
     */
    // outDir: 'dist',
    server: {
      port: VITE_PORT,
      host: true,
      // // 是否开启 https
      // https: false,
      // // 服务端渲染
      // ssr: false,
      proxy: {
        '/api': {
          target: 'http://localhost:3333/',
          changeOrigin: true,
          ws: true,
          rewrite: (pathStr) => pathStr.replace('/api', '')
        }
      }
    },
    resolve: {
      // 导入文件夹别名
      alias: [
        {
          find: /\/@\//,
          replacement: pathResolve('src') + '/'
        },
        // /#/xxxx => types/xxxx
        {
          find: /\/#\//,
          replacement: pathResolve('types') + '/'
        }
      ],
      extensions: ['.js', '.json', '.vue','.ts']
    },
    build: {
      target: 'es2015',
      terserOptions: {
        compress: {
          //生产环境时移除console
          drop_console: true,
          drop_debugger: true
        }
      },
      // 取消计算文件大小，加快打包速度
      brotliSize: false
      // sourcemap: true,
      // assetsDir: 'static/img',
      // rollupOptions: {
      //   output: {
      //     chunkFileNames: 'static/js/[name]-[hash].js',
      //     entryFileNames: 'static/js/[name]-[hash].js'
      //     // assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
      //   },

      //   // 配置CDN
      //   external: ['element-plus', 'vue'],
      //   plugins: [
      //     externalGlobals({
      //       vue: 'Vue',
      //       'element-plus': 'ElementPlus'
      //     })
      //   ]
      // }
    }
  }
}
