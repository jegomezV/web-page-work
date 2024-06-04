import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Bg } from './components/Bg.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Bg>
        <App />
      </Bg>
    
  </React.StrictMode>,
)
