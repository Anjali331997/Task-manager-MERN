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
      <div className="image_svg"></div>
      <div className="signup_login">
        {showSignup ? <Signup /> : <Login />}
        <button onClick={toggleForm}>
          {showSignup ? "Log In" : "Sign Up"}
        </button>
      </div>
    </div>
  )
}

export default Landing