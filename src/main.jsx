import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import store from './utils/store.js'
import {Provider} from "react-redux"

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <BrowserRouter>
  <StrictMode>
    <App />
  </StrictMode>
  </BrowserRouter>
  </Provider>
)
