import { signInWithCredential } from 'firebase/auth'
import React from 'react'
import { useState } from 'react'
import { auth } from '../../firebase'
import {Link} from "react-router-dom"


import "./index.css"



function LoginPage() {
    
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [errMsg,setErrorMsg] = useState("")
 

    const onSubmitForm = (e)=>{
        e.preventDefault();
        if(password==="" || email===""){
          setErrorMsg("Fill all Feilds");
          return;
        }
       signInWithCredential(auth,email,password).then((res)=>{
        console.log(res)
       }).catch((error)=>{
        console.log("Error--",error.msg)
       })
    }


  return (
      <div className='bg-container'>
      <form className='form' onSubmit={onSubmitForm}>
      <h1 className='sign-in'>Login</h1>
        <div className='form-container'>
          <label className="label-name" htmlFor='email'>Email</label>
          <input id="email" type="text"
                 placeholder='enter email' 
                 className='text-container' 
                 value={email}
                 onChange={e=>setEmail(e.target.value)}
           />
        </div>
        <div className='form-container'>
          <label className="label-name" htmlFor='password'>Password</label>
          <input id="password" 
                 type="password" 
                 placeholder='********' 
                 className='text-container'
                 value={password}
                 onChange={e=>setPassword(e.target.value)} />
        </div>
              <p className='err-msg'>{errMsg}</p>
              <button className='button-signIn'> Login</button> 
              <p className='forgot-password'>Already have account?</p>
              <p className='new-user'>New User?<span className='new-user'><Link to="/">Sign In</Link></span></p>
      </form>
    </div>
      
      
  
    
  )
}

export default LoginPage