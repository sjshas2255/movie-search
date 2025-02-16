import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    host: true,
    port: 5173,
    watch: {
      usePolling: true,
    },
    allowedHosts: ['movie-search-a6hscfb7a8gmasff.canadacentral-01.azurewebsites.net'],
  },
});
