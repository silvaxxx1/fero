// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  // Only set base path when building for production (GitHub Pages)
  base: process.env.NODE_ENV === 'production' ? '/fero/' : '/',
  
  // Ensure assets are properly handled
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/mp4|webm|ogg|mp3|wav|flac|aac/i.test(ext)) {
            return `assets/media/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        }
      }
    }
  },
  
  // Configure dev server
  server: {
    host: true,
    port: 3000
  }
});