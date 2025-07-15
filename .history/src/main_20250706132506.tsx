import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/banqueteria.css'
import { Router } from './Router';
import './assets/vendors/eventflow-icons/style.css';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)
