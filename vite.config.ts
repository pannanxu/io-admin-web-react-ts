import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import tsconfigPaths from 'vite-tsconfig-paths';
import vitePluginImp from 'vite-plugin-imp'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    tsconfigPaths(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name: string) => `antd/es/${name}/style`,
        },
      ],
    }),
  ],
  server: {
    // IP
    host: '127.0.0.1',
    // 服务端口
    port: 5000,
    cors: true, // 默认启用并允许任何源
    open: true, // 在服务器启动时自动在浏览器中打开应用程序
    // https://cn.vitejs.dev/config/#server-proxy
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8081',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  // 设置uri前缀, 设置前: http://127.0.0.1:3000/home、设置后: http://127.0.0.1:3000/io-admin/home
  // base: '/io-admin/',
  resolve: {
    // // 配置别名
    // alias: {
    //   '@': path.resolve(__dirname, 'src'),
    // },
    alias: [
      // 修复 antD components 样式导入失败
      // https://github.com/vitejs/vite/issues/2185#issuecomment-784637827
      { find: /^~/, replacement: '' },
    ]
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
})
