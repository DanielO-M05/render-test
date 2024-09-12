import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  outDir: '../server/public', // Serve static files from Express server
  plugins: [react()],
})
