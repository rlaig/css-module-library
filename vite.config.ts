import { defineConfig } from 'vite'

export default defineConfig({
  optimizeDeps: {
    include: ['react/jsx-runtime']
  },
  build: {
    outDir: 'docs-dist'
  },
})