import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // Importacion Necesaria 
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/**
     * BrowserRouter Envuelve toda la aplicación, es obligatorio si se usan rutas.
     */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
