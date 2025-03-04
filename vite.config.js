import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path,{resolve} from "path"

// https://vite.dev/config/
export default defineConfig({
  root:path.resolve(__dirname,"src/electron/renderer"),
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: "./",
  server: {
    port: 5555,
    strictPort: true,
  },
  build: {
    outDir: "dist-react",
  },
  resolve:{
    alias:{
      '@component':resolve('src/electron/Renderer/ui'),
      '@electron':resolve('src/electron'),
      '@renderer':resolve('src/electron/Renderer'),
    }
  },
})
