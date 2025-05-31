
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // Remove base path for custom domain
  base: '/',
  
  server: {
    host: "::",
    port: 8080,
    open: true,
  },

  plugins: [
    react(),  // React plugin with SWC for faster builds
    mode === 'development' && componentTagger(),
  ].filter(Boolean),

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
}))
