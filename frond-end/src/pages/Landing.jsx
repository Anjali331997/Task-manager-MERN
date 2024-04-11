import React, { useState } from 'react'
import './Landing.css'

const Landing = () => {
  const [showSignup,setShowSignup] = useState(true)
   return (
    <div className='landing_div'>
      <div className="image_svg"></div>
      <div className="signup_login">

      </div>
    </div>
  )
}

export default Landing