import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'Tantraz2025',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    port: 8000, // Set the port to 8000
  },
});