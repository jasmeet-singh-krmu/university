import { createContext } from "react";

let LoginContext = createContext({
    
    localStorageRead: false, // Indicator (flag) that tells if the values of this context have been read or not from the LocalStorage when the App Loads
    setLocalStorageRead: ()=> {},
    
    loggedIn: false,
    setLoggedIn: ()=> {},

    token: '',
    setToken: () => {},

    userdata: null,
    setUserdata: () => {},

})

export default LoginContext