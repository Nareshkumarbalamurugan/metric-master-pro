
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  // Base public path when served in GitHub Pages repo (repo name)
  base: '/metric-master-pro/',
  
  plugins: [
    react(),  // React plugin with SWC for faster builds
  ],

  resolve: {
    alias: {
      // Alias "@" to the "./src" folder for cleaner imports
      '@': path.resolve(__dirname, './src'),
    },
  },

  // Optional: build options, can tweak if needed
  build: {
    outDir: 'dist',
    sourcemap: false,
  },

  // Optional: server config if needed during development
  server: {
    port: 8080,
    open: true,
  },
})
