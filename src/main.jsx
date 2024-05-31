import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
//import './index.css'
//import './Principal.css'
import { Login } from './componentes/Login.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Principal } from './Principal.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
