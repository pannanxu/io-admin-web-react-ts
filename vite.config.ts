import {defineConfig} from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        reactRefresh(),
    ],
    server: {
        // IP
        host: '127.0.0.1',
        // 服务端口
        port: 5000,
        // https://cn.vitejs.dev/config/#server-proxy
        proxy: {
            '/api': {
                target: 'http://baidu.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        },
        cors: true
    },
    // 设置uri前缀, 设置前: http://127.0.0.1:3000/home、设置后: http://127.0.0.1:3000/io-admin/home
    // base: '/io-admin/',
    resolve: {
        // 配置别名
        alias: {
            '@': path.resolve(__dirname, "src")
        }
    }
})
