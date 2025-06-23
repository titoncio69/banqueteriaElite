import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/banqueteriaElite/',
  build: {
    outDir: 'docs', // así no tienes que renombrar manualmente dist → docs
  },
})
