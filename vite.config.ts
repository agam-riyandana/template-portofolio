import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteAMP from 'vite-plugin-amp'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  plugins: [ViteAMP()]
})
