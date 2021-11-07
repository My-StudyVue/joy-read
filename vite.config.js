import { defineConfig } from 'vite'
import { resolve } from "path";
import vue from '@vitejs/plugin-vue'

function pathResolve(dir) {
  return resolve(__dirname, ".", dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": pathResolve("src"),
    }
  },
  publicDir: 'public',
  //vite开发服务器配置
  server: {
    host: 'localhost',
    port: 3000,
    // open: true,
    // strictPort: false,
    // https: false,
    // cors: true, // 默认启用并允许任何源
    // 反向代理
    // proxy: {
    //   '/admin': {
    //     target: 'http://api.vite-admin.com',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/admin/, '')
    //   },
    // }
  },

  //生产模式打包配置
  build: {
    outDir: 'dist',//Specify the output directory (relative to project root).
  }
})
