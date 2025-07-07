import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import plugin from 'tailwind-scrollbar';

import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), plugin,],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
