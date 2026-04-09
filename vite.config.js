import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["4a5a-2401-4900-a8fd-33c4-acaa-c2a0-47c8-c097.ngrok-free.app"]
  }
})
