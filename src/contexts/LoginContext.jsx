import { createContext } from "react";

let LoginContext = createContext({
    
    loggedIn: false,
    setLoggedIn: ()=> {},

    token: '',
    setToken: () => {},

    userdata: null,
    setUserdata: () => {},

})

export default LoginContext