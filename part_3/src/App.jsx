/* eslint-disable no-unused-vars */
// src/App.jsx
import React, { useEffect, useState } from 'react'

const App = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetchNews()
  }, [])

  const fetchNews = async () => {
    try {
      // Replace with your news API endpoint and API key
      const response = await fetch(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=b2b71736e9074875bd224f502af18e58'
      )
      const data = await response.json()
      setArticles(data.articles)
    } catch (error) {
      console.error('Error fetching news:', error)
    }
  }

  // Request permission for notifications and subscribe to push messages
  const requestPushPermission = async () => {
    const permission = await Notification.requestPermission()
    if (permission === 'granted') {
      subscribeUserToPush()
    } else {
      console.warn('Push notifications permission not granted.')
    }
  }

  const subscribeUserToPush = async () => {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.ready
        // The applicationServerKey is your VAPID public key.
        // You need to generate VAPID keys and replace 'YOUR_VAPID_PUBLIC_KEY' below.
        const subscription = await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array('YOUR_VAPID_PUBLIC_KEY')
        })
        console.log('User is subscribed:', subscription)
        // Here you would typically send the subscription to your server
      } catch (error) {
        console.error('Failed to subscribe the user: ', error)
      }
    }
  }

  // Helper function to convert the base64 public key to Uint8Array
  const urlBase64ToUint8Array = (base64String) => {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
    const base64 = (base64String + padding)
      .replace(/-/g, '+')
      .replace(/_/g, '/')

    const rawData = window.atob(base64)
    const outputArray = new Uint8Array(rawData.length)

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i)
    }
    return outputArray
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h1>News Reader App</h1>
      <button onClick={requestPushPermission}>
        Enable Push Notifications
      </button>
      <hr />
      {articles.length === 0 ? (
        <p>Loading news...</p>
      ) : (
        <ul>
          {articles.map((article, index) => (
            <li key={index} style={{ marginBottom: '1rem' }}>
              <a href={article.url} target='_blank' rel='noopener noreferrer'>
                <strong>{article.title}</strong>
              </a>
              <p>{article.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
