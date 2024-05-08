import { createContext } from "react";

let LoginContext = createContext({
    
    localStorageRead: false,
    setLocalStorageRead: ()=> {},
    
    loggedIn: false,
    setLoggedIn: ()=> {},

    token: '',
    setToken: () => {},

    userdata: null,
    setUserdata: () => {},

})

export default LoginContext