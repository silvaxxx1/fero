import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: '/fero/', // <-- must match your GitHub repo name
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
