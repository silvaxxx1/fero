import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: '/hbd-project/', // <-- set this to your GitHub repo name
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
