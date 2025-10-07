import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Meditacion-Origamis/',   // ← nombre exacto del repo (respetando mayúsculas)
  plugins: [react()],
})
