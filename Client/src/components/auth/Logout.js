import { Home } from '@material-ui/icons'
import axios from 'axios'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import AuthContext from '../../context/AuthContext'

function LogoOutBtn () {

const navigate = useNavigate()

const {getLoggedIn}=useContext(AuthContext)


 async function logOut(){

console.log('called');

await axios.get("http://localhost:5000/auth/logout")

await getLoggedIn();

navigate('/auth/login')
     

}

    return (
      
        <button  style={{ width: '5rem',borderRadius:"10px" }}  onClick={logOut} >Logout

        </button>
        
    )
}

export default LogoOutBtn   
