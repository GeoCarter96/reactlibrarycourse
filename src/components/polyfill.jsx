import legacy from '@vitejs/plugin-legacy'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11'], // Specify browsers to support
      modernPolyfills: true // Auto-detects and polyfills for modern browsers too
    }),
  ],
})