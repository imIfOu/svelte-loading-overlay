import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  plugins: [svelte()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib/index.js'),
          name: 'svelte-loading-overlay',
          fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ['svelte'],
      output: {
        globals: {
          svelte: 'svelte'
        }
      }
    }
  }
})


