import axios from 'axios'
import React, { useContext } from 'react'
import AuthContext from '../../context/AuthContext'

function LogoOutBtn () {

const {getLoggedIn}=useContext(AuthContext)

 async function logOut(){

await axios.get("http://localhost:5000/auth/logout")
 await getLoggedIn() 
}

    return (
      
        <button onClick={logOut} >

        </button>
        
    )
}

export default LogoOutBtn   
