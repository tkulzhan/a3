// src/service-worker.js
self.addEventListener('push', event => {
    const data = event.data ? event.data.json() : {}
    const title = data.title || 'New Notification'
    const options = {
        body: data.body || 'New content is available!',
        icon: '/pwa-192x192.png'
    }
    event.waitUntil(self.registration.showNotification(title, options))
})
