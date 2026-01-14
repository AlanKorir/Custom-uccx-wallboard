import React from 'react'
// Import React
import ReactDOM from 'react-dom/client'
// Import ReactDOM client for rendering
import App from './App'
// Import main App component
import './styles/index.css'
// Import global CSS

ReactDOM.createRoot(document.getElementById('root')!).render(
  // Get root element and create React root
  <React.StrictMode>
    {/* StrictMode for highlighting potential problems */}
    <App />
    {/* Render the App component */}
  </React.StrictMode>,
)