import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/banqueteria.css'
import { Router } from './Router';
import './assets/vendors/eventflow-icons/style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)
