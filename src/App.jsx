import { useEffect, useState } from 'react'
import './App.css'

import LoginContext from './contexts/LoginContext'

// Packages
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import DashboardPage from './pages/DashboardPage'
import LoginPage from './pages/LoginPage'
import StudentsPage from './pages/StudentsPage'
import DepartmentsPage from './pages/DepartmentsPage'

// Layouts
import Layout from './layouts/Layout'

// TODO NEXT
// Use Layouts

function App() {

  // Context States
  const [localStorageRead, setLocalStorageRead] = useState(false)
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
    setLocalStorageRead(true) // Indicating that the context has been read from the LocalStorage (weather the vaues were there in the LocalStorage or not)
    return ()=>{}
  },[])

  // Routing (React Router)
  // Context API
  // LocalStorage

  return (
    <>
      <LoginContext.Provider value={{ localStorageRead,setLocalStorageRead, loggedIn,setLoggedIn, token,setToken, userdata,setUserdata }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Layout /> }>
              <Route index element={ <DashboardPage /> } />
              <Route path="/login" element={ <LoginPage /> } />
              <Route path="/students" element={ <StudentsPage /> } />
              <Route path="/departments" element={ <DepartmentsPage /> } />
            </Route>
          </Routes>
        </BrowserRouter>
      </LoginContext.Provider>
    </>
  )
}

export default App
