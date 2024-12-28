import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import FavProvider from './context/addfavscontext'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <FavProvider>
  <App />
  </FavProvider>
  </BrowserRouter>,
)
