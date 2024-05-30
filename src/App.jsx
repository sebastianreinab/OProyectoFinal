import { useState } from 'react'
import './App.css'
import { BrowserRouter, Link, Navigate,Route, Routes } from 'react-router-dom'
import { Login } from './componentes/Login'
import { Regis } from './componentes/Regis'
import { Principal } from './Principal'

function App() {

  return (
    <>
      <div className='Nav-var'>
        <nav>
          <ul>
            <li><h1><Link to="/">Princi</Link></h1></li>
            <li><h1><Link to="login">Login</Link></h1></li>
            <li><h1><Link to="regis">Registro</Link></h1></li>
          </ul>
        </nav>
      </div>
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="login" element={<Login />} />
          <Route path="regis" element={<Regis />} />
        </Routes>
    </>
  )
}

export default App
