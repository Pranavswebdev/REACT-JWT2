import axios from 'axios'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import AuthContext from '../../context/AuthContext'

function AdLogoOutBtn () {

const navigate = useNavigate()

const {getAdLoggedIn}=useContext(AuthContext)


 async function logOut(){

console.log('called');

await axios.get("http://localhost:5000/admin/adlogout")

await getAdLoggedIn();
navigate('/admin/adlogin')


}

    return (
      
        <button  style={{ width: '5rem',borderRadius:"10px" }}  onClick={logOut} >Logout

        </button>
        
    )
}

export default AdLogoOutBtn   
