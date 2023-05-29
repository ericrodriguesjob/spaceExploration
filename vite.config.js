import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import autoprefixer from 'autoprefixer'
import { resolve } from 'path'

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist'
  },
  plugins: [
    autoprefixer,
    viteStaticCopy({
      targets: [
        {
          src: resolve(__dirname, './src/views/'),
          dest: resolve(__dirname, 'dist')
        }
      ]
    })
  ]
})
