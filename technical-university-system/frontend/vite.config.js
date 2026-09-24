import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '')

    return {
        plugins: [react()],
        server: {
            host: '0.0.0.0',
            allowedHosts: ['wrongness-prude-calzone.ngrok-free.dev'],
            proxy: {
                '/api': {
                    target: env.VITE_DEV_API_URL,
                    changeOrigin: true,
                },
                '/media': {
                    target: env.VITE_DEV_API_URL,
                    changeOrigin: true,
                },
            },
        },
    }
})