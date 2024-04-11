import React from 'react'

const signup = () => {
  return (
    <from>
        <h2>Sign Up</h2>
        <input type='text' placeholder='Enter you name'/>
        <input type='email' placeholder='username@email.com'/>
        <input type='password' placeholder='password'/>
        <input type='submit' value={"Sign Up"}/>
    </from>
  )
}

export default signup