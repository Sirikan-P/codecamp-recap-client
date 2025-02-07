import { Outlet } from "react-router"
import MainNav from "../components/MainNav"

function Layout() {
  return (
    <div>
        <MainNav />
        
        {/*  // <outlet/> render c   hild node */}
        <Outlet />

    </div>
  )
}

export default Layout