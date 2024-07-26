import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:3001', // backend server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') // remove /api prefix in the url
      }
    }
  }
  
})
