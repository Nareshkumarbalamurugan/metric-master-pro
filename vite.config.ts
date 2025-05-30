import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/metric-master-pro/', // Required for GitHub Pages
  plugins: [react()],
})