import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,
    // Esto asegura que Vite maneje correctamente las rutas de archivos
    historyApiFallback: true, 
  }
})