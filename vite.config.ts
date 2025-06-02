
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // Set base path for GitHub Pages with custom domain
  base: '/',
  
  server: {
    host: "::",
    port: 8080,
    open: true,
  },

  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    outDir: 'dist',
    sourcemap: false,
    // Ensure assets are properly referenced
    assetsDir: 'assets',
  },
}))
