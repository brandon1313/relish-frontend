import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/photos': {
        target: "http://44.220.137.157:3000",
        changeOrigin: true,
      },
    },
  },
})

