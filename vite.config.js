import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/error-management-frontend/', // 👈 This must match your repo name
  // server: {
  //   port: 5173, // 👈 Fix port to 5173
  // },
});