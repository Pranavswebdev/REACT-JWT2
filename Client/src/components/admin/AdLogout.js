import axios from 'axios'
import React, { useContext } from 'react'
import AuthContext from '../../context/AuthContext'

function AdLogoOutBtn () {

const {getLoggedIn}=useContext(AuthContext)

 async function logOut(){

await axios.get("http://localhost:5000/admin/adlogout")
 await getLoggedIn() 
}

    return (
      
        <button  style={{ width: '5rem',borderRadius:"10px" }}  onClick={logOut} >Logout

        </button>
        
    )
}

export default AdLogoOutBtn   
