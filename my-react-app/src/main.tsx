import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './styles/App.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    <App />
    {/* Mode Dark Bg */}
    {/* <div className="relative bg-slate-200 -z-10 h-full w-screen border-2 border-white">
      <div className="fixed -z-10 h-full w-screen bg-[radial-gradient(#9d9d9d_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      <App />
    </div> */}
  </React.StrictMode>,
);
