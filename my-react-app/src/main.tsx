import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="absolute overflow-x-hidden top-0 z-[-2] w-screen bg-color-bg1 bg-[radial-gradient(ellipse_50%_90%_at_50%_-20%,rgba(1,2,200,0.3),rgba(255,255,255,0))]">
      <App />
    </div>
  </React.StrictMode>,
)
