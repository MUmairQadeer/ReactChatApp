import React from 'react'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react';
import {auth} from '../components/firebase.js';



export default function Login() {

  const [err, setErr] = useState(false)
  const navigate = useNavigate()
  const handleSubmit = async (e) => {

  e.preventDefault()

  const email = e.target[0].value
  const password = e.target[1].value


  try {
    await signInWithEmailAndPassword(auth,email,password);
    navigate("/");
    
  }  catch (err) {
      setErr(true);
  }

};
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className='logo'> Lama Chat</span>
            <span className='title'> Login</span>

            <form action="" onSubmit={handleSubmit}>
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder="Password"/>
                <button>Login</button>
            </form>
            <p>You don't have an account? <Link to="/register"> Sign Up</Link></p>
        </div>
    </div>
  )
}
