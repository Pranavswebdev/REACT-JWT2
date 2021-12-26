import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Navbar from './components/layout/Navbar';

function Router() {
    return (

        <BrowserRouter>

            <Navbar/>
            <Routes>
                {/* <Route exact path="/" element={<Home />} /> */}
           
                <Route path="/register" element={<Register /> } />
                <Route path="/login" element={<Login />} />
                {/* <Route path="users/*" element={<Users />} /> */}
            </Routes>

        </BrowserRouter>

    )
}

export default Router
