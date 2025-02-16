import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GeoChart } from './GeoChart'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <GeoChart />
  </StrictMode>,
)
