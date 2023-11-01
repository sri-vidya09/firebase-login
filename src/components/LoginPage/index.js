import { signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
import React from 'react'
import { useState } from 'react'
import { auth } from '../../firebase'
import {Link,useNavigate} from "react-router-dom"
import { FcGoogle } from "react-icons/fc";


import "./index.css"

function LoginPage() {
    const navigate =  useNavigate()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [errMsg,setErrorMsg] = useState("")

    const onSubmitLoginForm = (e)=>{
        e.preventDefault();
        setErrorMsg("")
        if(password==="" || email===""){
          setErrorMsg("Fill all Feilds");
          return;
        }
         signInWithEmailAndPassword(auth,email,password)
        .then((res)=>{
        console.log(res)
        
        navigate("/home")
       }).catch((error)=>{
        setErrorMsg("Wrong username or password",error.msg)
       })
      
    }


  const signUpWithGoogle=()=>{
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
    .then((result) => {
      const {email} = result.user;
      console.log({email})
      navigate("/home")
    }).catch((error) => {
     setErrorMsg("Error:Login with valid gmail",error.msg)
    });
  }

  return (
      <div className='bg-container'>
      <form className='form' onSubmit={onSubmitLoginForm}>
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
              <div className='google'>
              <FcGoogle className='google-icon' onClick={signUpWithGoogle} />
              <p className='google-login'>Login with Google</p>
              </div>
              <p className='new-user'>New User?<span className='new-user'><Link to="/">Sign In</Link></span></p>
      </form>
    </div>
      
      
  
    
  )
}

export default LoginPage