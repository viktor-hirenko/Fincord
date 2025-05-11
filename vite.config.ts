import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  resolve: {
    alias: {
      '@img': path.resolve(__dirname, 'src/assets/img'),
      '@video': path.resolve(__dirname, 'src/assets/img/video'),
      '@posters': path.resolve(__dirname, 'src/assets/img/video/posters'),
      '@thumbs': path.resolve(__dirname, 'src/assets/img/thumbs'),
    },
  },
  build: {
    assetsDir: 'brand-lp',
  },
})
