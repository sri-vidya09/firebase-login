
import React from 'react'
import { useState } from 'react'
import { auth } from '../../firebase'
import {Link,useNavigate} from "react-router-dom"
import "./index.css"
import { createUserWithEmailAndPassword,updateProfile } from 'firebase/auth'


function SigninPage() {
  const navigate = useNavigate()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [username,setUserName] = useState("")
    const [errMsg,setErrorMsg] = useState("")
 

    const onSubmitForm = (e)=>{
        e.preventDefault();
        if(username==="" || password==="" || email===""){
          setErrorMsg("Fill all Feilds");
          return;
        }
        if(password.length<6){
          setErrorMsg("Password is weak,should be atleast 6 characters")
        }
        setErrorMsg("")
        
        createUserWithEmailAndPassword(auth,email,password,username).then(async(res)=>{
        const user = res.user
        await updateProfile(user,{
          displayName:username
        });
         navigate("/login")
        })
        .catch((error)=>{
          
          console.log("Error--",error.message)
          setErrorMsg(error.message)
        })
    }

  return (
      <div className='bg-container'>
      <form className='form' onSubmit={onSubmitForm}>
      <h1 className='sign-in'>Sign In</h1>
     <div className='form-container'>
          <label className="label-name" htmlFor='userName'>User Name</label>
          <input id="userName" 
                 type="text"
                  placeholder='enter name' 
                  className='text-container'
                  value={username}
                  onChange={e=>setUserName(e.target.value)} />
        </div>
        <div className='form-container'>
          <label className="label-name" htmlFor='email'>Email</label>
          <input id="email" type="text"
                 placeholder='enter email' 
                 className='text-container' 
                 value={email}
                 onChange={e=>setEmail(e.target.value)} />
           
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
            <button className='button-element'  >Sign In </button>
            <p className='user'>Already have account?<span><Link to="/login">Login</Link></span></p>
        
      </form>
    </div>
      
      
  
    
  )
}

export default SigninPage