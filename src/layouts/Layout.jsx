// Layouts
import Header from './Header'

// Packages
import { Outlet } from 'react-router-dom'

function Layout() {
    return(
        <>
            <Header />
            <Outlet />
            {/* <Footer /> */}
        </>
    )
}
export default Layout