// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // Automatically register the service worker and check for updates
      registerType: 'autoUpdate',
      // Specify assets to be cached (you can add more if needed)
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt'],
      manifest: {
        name: 'News Reader PWA',
        short_name: 'NewsPWA',
        description: 'A progressive news reader app with offline support and push notifications.',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      // Use Workbox to set up a caching strategy for dynamic data
      workbox: {
        runtimeCaching: [
          {
            // Cache calls to the news API (adjust the URL pattern as needed)
            urlPattern: /^https:\/\/newsapi\.org\/.*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'news-api-cache',
              networkTimeoutSeconds: 10,
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 // cache for 1 hour
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    })
  ]
})
