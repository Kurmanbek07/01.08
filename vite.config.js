import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // base: './', // относительные пути, чтобы файлы правильно грузились из корня
  plugins: [react()],
})


