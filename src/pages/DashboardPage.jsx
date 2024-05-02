import { useContext } from "react"
import LoginContext from "../contexts/LoginContext"

function DashboardPage() {

  const loginContext = useContext(LoginContext)

    return(
      <>
        <h1>Dashboard</h1>

        <div>
          {
            loginContext.loggedIn
            ? 'Logged In as ' + loginContext.userdata.username
            : 'Not Logged In'
          }
        </div>
        <br />
        <div>Token: { loginContext.token }</div>
      </>
    )
  }

export default DashboardPage