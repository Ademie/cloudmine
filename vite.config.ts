import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/cloudmine/",
  plugins: [react()],
  build: {
    assetsDir: 'assets', // Optional: Customize asset directory if needed
  },
})

