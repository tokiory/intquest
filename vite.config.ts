import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import {fileURLToPath} from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5111,

  },
  css: {
    modules: {
      localsConvention: 'dashesOnly',
    },
  },
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '@shared', replacement: fileURLToPath(new URL('./shared', import.meta.url)) },
    ]
  }
})
