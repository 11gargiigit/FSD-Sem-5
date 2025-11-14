import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './component/login.jsx'
import Registration from './Component/registration.jsx'  
import  Mainlayout from './component/mainlayout.jsx'
import Dashboard from './component/dashboard.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/registration' element={<Registration/>}/>
            <Route path='/' element={<Mainlayout/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
         
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App