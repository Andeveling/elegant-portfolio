import App from '@/App'
import '@/config/i18next.config'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeContextProvider } from './context/ThemeContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>,
)
