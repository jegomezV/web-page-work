import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <div className="absolute overflow-x-hidden top-0 z-[-2] w-screen bg-color-bg1 bg-[radial-gradient(ellipse_50%_90%_at_50%_-20%,rgba(193,201,250,0.3),rgba(255,255,255,0))]">
      <App />
    </div>
    {/* <div className="relative bg-slate-200 -z-10 h-full w-screen border-2 border-white">
      <div className="fixed -z-10 h-full w-screen bg-[radial-gradient(#9d9d9d_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      <App />
    </div> */}
  </React.StrictMode>,
)
