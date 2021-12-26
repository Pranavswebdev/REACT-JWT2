import axios from 'axios';
import React, { useState } from 'react'

function Register() {

const [email,setEmail]= useState("");
const [password,setPassword]= useState("");
const [passwordverify,setPasswordVerify]= useState("");


async function register(e){

    e.preventDefault()
    try{

    const registerData ={

        email,
        password,
        passwordverify

    }

    await axios.post('http://localhost:5000/auth/',registerData)

    }catch(err){
        console.log(err);
    }
    


}

    return (
        <div>

        <h1>Register a New Account</h1>

        <form onSubmit={register}> 
        
        <input type="email" placeholder="Email" onChange={(e)=>{
            setEmail(e.target.value) 
        }}  value={email} />
        <input type="passwords" placeholder="password"  onChange={(e)=>{
            setPassword(e.target.value) 
        }}  value={password}/>
        <input type="passwords" placeholder="Verify password" onChange={(e)=>{
            setPasswordVerify(e.target.value) 
        }}  value={passwordverify} />
        <button type='submit'> Register </button>
        
        </form>
            
        </div>
    )
}

export default Register
