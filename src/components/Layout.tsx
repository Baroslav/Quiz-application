import { Outlet } from "react-router-dom"
import Add from "./buttons/Add"
import Search from "./Search"

const Layout = () => {
    return (
        <>  
            <Search/>
            {/* <Add/> */}
            <Outlet/>
        </>
    )
}

export default Layout