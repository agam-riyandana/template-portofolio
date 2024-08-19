// vite.config.ts
import ViteAMP from 'vite-plugin-amp'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
export default {
  plugins: [ViteAMP()]
})
