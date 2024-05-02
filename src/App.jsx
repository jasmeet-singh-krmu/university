import { useEffect, useState } from 'react'
import './App.css'

import LoginContext from './contexts/LoginContext'

// Packages
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import DashboardPage from './pages/DashboardPage'
import LoginPage from './pages/LoginPage'

// TODO NEXT
// Use Layouts

function App() {

  // Context States
  const [loggedIn, setLoggedIn] = useState(false)
  const [token, setToken] = useState('')
  const [userdata, setUserdata] = useState(null)

  useEffect(()=>{
    setLoggedIn(
      localStorage.getItem('loggedIn') == 'true'
      ? true
      : false
    )
    setToken( localStorage.getItem('token') )
    setUserdata( JSON.parse(localStorage.getItem('userdata')) )
  },[])

  // Routing (React Router)
  // Context API
  // LocalStorage

  return (
    <>
      <LoginContext.Provider value={{ loggedIn,setLoggedIn, token,setToken, userdata,setUserdata }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <DashboardPage /> } />
            <Route path="/login" element={ <LoginPage /> } />
          </Routes>
        </BrowserRouter>
      </LoginContext.Provider>
    </>
  )
}

export default App