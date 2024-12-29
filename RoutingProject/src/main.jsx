import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import FavProvider from './context/addfavscontext'
import { Helmet, HelmetProvider } from 'react-helmet-async';
createRoot(document.getElementById('root')).render(
  
  <HelmetProvider>
  <BrowserRouter>
  <FavProvider>
  <App />
  </FavProvider>
  </BrowserRouter>,
  </HelmetProvider>
 
)
