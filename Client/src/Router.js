import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import NavBar from "./components/layout/Navbar";
import AdNavBar from "./components/layout/AdNavbar"
import AuthContext from "./context/AuthContext";
import AdAuthContext from "./context/AdAuthContext"
import LogoOutBtn from "./components/auth/Logout";
import AdLogin from "./components/admin/AdLogin";
import AdRegister from "./components/admin/AdRegister";
import AdLogoOutBtn from "./components/admin/AdLogout";
import Home from "./components/auth/Home";
import OHome from "./components/auth/OHome ";
import AdHome from "./components/admin/AdHome";


function Router() {
    
    const { loggedIn } = useContext(AuthContext);
    const { AdloggedIn } = useContext(AuthContext);

   




    return (
        <BrowserRouter>


            <Routes>


                <Route path="auth/register" element={loggedIn ? <Navigate to="/auth/home" /> : <Register />} />
                <Route path="auth/login" element={loggedIn ? <Navigate to="/auth/home" /> : <Login />} />
                <Route path="auth/home" element={<OHome />} />
                <Route path="auth/logout" element={<OHome />} />
                <Route path="auth/ohome" element={<OHome />} />


                <Route path="auth/home" element={<Home />} />

                <Route path="admin/adlogin" element={AdloggedIn?<Navigate to="/admin" />:<AdLogin />} />
                <Route path="/admin" element={AdloggedIn?<AdHome />:<Navigate to="/admin/adlogin" /> } />
                <Route path="admin/adreg" element={<AdRegister />} />
                <Route path="admin/adlogout" element={<AdLogoOutBtn />} />

            </Routes>



        </BrowserRouter>
    );
}

export default Router;
