import { useContext } from "react"

import LoginContext from '../contexts/LoginContext'

// Packages
import { Link } from 'react-router-dom'

function Header() {

    const loginContext = useContext(LoginContext)

    const logout = () => {
      
        // Changing Context
        loginContext.setLoggedIn(false)
        loginContext.setToken( '' )
        loginContext.setUserdata( null )
  
        // Saving Context in LocalStorage (Persistently)
        localStorage.removeItem('loggedIn')
        localStorage.removeItem('token')
        localStorage.removeItem('userdata')
    }

    return(
        <div className='header'>
            <Link to="/">Dashboard</Link>

            {(
                loginContext.loggedIn
                ? <a href="" onClick={logout}>Logout</a>
                : <Link to="/login">Login</Link>
            )}
            
            

        </div>
    )
}

export default Header