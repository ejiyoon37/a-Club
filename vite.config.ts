import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // ✅ 추가: 상대 경로 기준으로 정적 자산 로딩
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://ajouclubserver.shop',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})