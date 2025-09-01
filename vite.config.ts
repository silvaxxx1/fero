import { defineConfig } from 'vite';
import * as path from 'path';
import { fileURLToPath } from 'url';

// ESM __dirname emulation
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  base: '/fero/', // matches your GitHub repo
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
