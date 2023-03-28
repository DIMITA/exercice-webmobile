import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({
      registerType: 'prompt',
      includeAssets: ['icon-192x192.png', 'vite.svg'],
      manifest: 
        {
          theme_color: "#f69435",
          background_color: "#f69435",
          start_url: "/",
          name: "Feature List",
          display: "fullscreen",
          short_name: "FL",
          icons: [
              {
                  src: "/icon-192x192.png",
                  sizes: "192x192",
                  type: "image/png"
              },
              {
                  src: "/icon-256x256.png",
                  sizes: "256x256",
                  type: "image/png"
              },
              {
                  src: "/icon-384x384.png",
                  sizes: "384x384",
                  type: "image/png"
              },
              {
                  src: "/icon-512x512.png",
                  sizes: "512x512",
                  type: "image/png"
              }
          ]
      }
    }),],
})
