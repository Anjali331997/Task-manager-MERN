import React, { useState } from 'react'
import './Landing.css'
import Login from '../components/login/Login'
import Signup from '../components/Sign/Signup'



const Landing = () => {
  const [showSignup, setShowSignup] = useState(true)
  const toggleForm = () => {
    setShowSignup(!showSignup);
  };
  return (
    <div className='landing_div'>
      <div className="image_div">
        <img src='https://i.postimg.cc/3w2rYVRM/Untitled-design.pngg' alt="" />
      </div>
      <div className="signup_login">

        {showSignup ? <Signup /> : <Login />}

        <button onClick={toggleForm} className='togglebutton'>
          {showSignup ? "Log In" : "Sign Up"}
        </button>

      </div>
    </div>
  )
}

export default Landing