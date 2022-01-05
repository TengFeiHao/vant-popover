import { ConfigEnv, loadEnv, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import styleImport from 'vite-plugin-style-import'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
import viteCompression from 'vite-plugin-compression'

const CWD = process.cwd()

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfig => {
  // 环境变量
  const { VITE_APP_ENV, VITE_APP_SRC } = loadEnv(mode, CWD)

  return {
    plugins: [
      vue(),
      vueJsx(),
      legacy({
        targets: ['defaults', 'not IE 11']
      }),
      styleImport({
        libs: [
          {
            libraryName: 'vant',
            esModule: true,
            resolveStyle: (name) => `vant/es/${name}/style`
          }
        ]
      }),
      // gzip压缩
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: 'gzip',
        ext: '.gz',
        // 压缩后是否删除源文件
        deleteOriginFile: false
      })
    ],
    base: VITE_APP_SRC, //打包路径
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        api: path.resolve(__dirname, './src/service/api'),
        com: path.resolve(__dirname, './src/components'),
        util: path.resolve(__dirname, './src/assets/js')
      }
    },
    build: {
      outDir: 'vite-project',
      terserOptions: {
        compress: {
          drop_console: VITE_APP_ENV === 'production' ? true : false,
          drop_debugger: VITE_APP_ENV === 'production' ? true : false
        }
      },
      rollupOptions: {
        // rollup配置会合并
        output: {
          entryFileNames: `assets/[name].[hash].js`,
          chunkFileNames: `assets/[name].[hash].js`,
          assetFileNames: `assets/[name].[hash].[ext]`
        }
      }
    },
    server: {
      port: 9527,
      open: true,
      // proxy: {
      //   '/api': ''//代理网址
      // },
      cors: true
    }
  }
}
