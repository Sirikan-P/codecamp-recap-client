import { Route, Routes } from "react-router"
import Layout from "../layouts/Layout"
import Home from "../pages/home"
import About from "../pages/About"
import Register1 from "../pages/auth/Register1"
import Login from "../pages/auth/Login"
import HomeUser from "../pages/user/HomeUser"
import Dashboard from "../pages/admin/Dashboard"
import Manage from "../pages/admin/Manage"
import Notfound from "../pages/Notfound"
import ProtectRoutes from "./ProtectRoutes"


function AppRoutes() {
  return (
    <>
        <Routes >
            {/* public */}
            < Route path="/" element={ < Layout /> }> 
                <Route index element= { < Home /> } /> 
                <Route path="about" element= { < About /> } /> 
                <Route path ="register" element= { < Register1 /> }/>
                <Route path = "login" element = { <Login /> }/>
            </Route>

            {/* private [user] */}
            < Route path="user" 
                    element= { < ProtectRoutes  el={ <Layout /> }
                                                allows={ ["USER","ADMIN"] }/>}
            >
                <Route index element = { < HomeUser /> } />
            </Route>

            {/* private [admin] */}
            <Route  path="admin" 
                    element= { < ProtectRoutes  el={ <Layout/> }  
                                                allows={ ["ADMIN"] }/> }
            >                 
                <Route index element= { < Dashboard/> } />
                <Route path="manage" element= { < Manage />} />
            </Route>


            <Route path="*" element={ < Notfound />} />

        </Routes>
    </>
  )
}

export default AppRoutes