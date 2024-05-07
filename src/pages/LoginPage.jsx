import { useContext, useState } from "react"
import axios from "axios";

import LoginContext from '../contexts/LoginContext'
import { useNavigate } from "react-router-dom";

function LoginPage() {

  const loginContext = useContext(LoginContext)
  const navigate = useNavigate()  /* ADD TO PPT */

  const handleLogin = (event) => {
    event.preventDefault();

    axios.post(
      'https://university.demoapi.xyz' + '/api/auth/local',
      {
        "identifier": username,
        "password": password
      }
    ).then(response => {
      console.log(response)
      
      // Changing Context
      loginContext.setLoggedIn(true)
      loginContext.setToken( response.data.jwt )
      loginContext.setUserdata( response.data.user )

      // Saving Context in LocalStorage (Persistently)
      localStorage.setItem('loggedIn',true)
      localStorage.setItem('token',response.data.jwt)
      localStorage.setItem('userdata', JSON.stringify(response.data.user))
      
      
      // Redirects to Dashboard Page
      navigate('/')

    })
    .catch(error => {
      console.log(error)
    })


  }

  // States
  let [username,setUsername] = useState('frontenduser@demoapi.xyz')
  let [password,setPassword] = useState('KRMU@123')

  return(
    <>
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        
        <div className="form_field">
          <label htmlFor="login_username">Username</label>
          <input
            id="login_username"
            type="text"
            value={username}
            onChange={ (e)=>{ setUsername(e.target.value) } }
          />
        </div>
        
        <div className="form_field">
          <label htmlFor="login_password">Password</label>
          <input
            id="login_password"
            type="password"
            value={password}
            onChange={ (e)=>{ setPassword(e.target.value) } }
          />
        </div>

        <div className="form_field">
          <button type="submit">Login</button>
        </div>

      </form>

      {/* <div>
        {
          loginContext.loggedIn
          ? 'Logged In as ' + loginContext.userdata.username
          : 'Not Logged In'
        }
      </div>
      <br />
      <div>Token: { loginContext.token }</div> */}

    </>
  )
}

export default LoginPage