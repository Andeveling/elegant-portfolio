import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import { NextUIProvider } from '@nextui-org/react'
import { DarkTheme } from '@/Theme'
import '@/config/i18next.config.js'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NextUIProvider theme={DarkTheme}>
      <App />
    </NextUIProvider>
  </React.StrictMode>,
)
