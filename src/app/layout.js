"use client";
import './globals.css'
import { Inter } from 'next/font/google'
import { Provider } from 'react-redux'
import store from '../../store'



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body>{children}</body>
      </Provider>
    </html>
  )
}

