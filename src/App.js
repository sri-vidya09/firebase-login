import { useEffect, useState } from 'react';
import LoginPage from './components/LoginPage';
import SigninPage from './components/SigninPage';
import HomePage from './components/HomePage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {auth} from "./firebase"

import './App.css';


function App() {
  const [presentUser,setUser] = useState(null)
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      setUser({
        uid:user.uid,
        email:user.email
      })
      
    })
  })
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path ="/" element={<SigninPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/home" element={<HomePage/>}></Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
