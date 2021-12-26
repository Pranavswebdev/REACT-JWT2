import axios from 'axios';
import React, { useState } from 'react'

function Login() {

const [email,setEmail]= useState("");
const [password,setPassword]= useState("");



async function login(e){

    e.preventDefault()
    try{

    const LoginData ={

        email,
        password,
 

    }

    await axios.post('http://localhost:5000/auth/login',LoginData)

    }catch(err){
        console.log(err);
    }
    


}

    return (
        <div>

        <h1>Login</h1>

        <form onSubmit={login}> 
        
        <input type="email" placeholder="Email" onChange={(e)=>{
            setEmail(e.target.value) 
        }}  value={email} />
        <input type="passwords" placeholder="password"  onChange={(e)=>{
            setPassword(e.target.value) 
        }}  value={password}/>
   
        <button type='submit'> Register </button>
        
        </form>
            
        </div>
    )
}

export default Login
