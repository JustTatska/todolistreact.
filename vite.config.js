import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/todolistreact/',
  plugins: [react()],
  build: {
    outDir: 'build',  
  },
  test: {
    globals: true,
    environment: 'jsdom',
  }
})
