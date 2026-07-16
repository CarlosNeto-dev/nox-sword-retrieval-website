import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  root: 'src',

  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  server: {
    host: true, 
    
    watch: {
      usePolling: true,
    }
  },
  
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
})
