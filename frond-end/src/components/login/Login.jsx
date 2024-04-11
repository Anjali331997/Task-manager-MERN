import React from 'react'

const Login = () => {
  return (
    <from>
        <h2>Login</h2>
        <input type='email' placeholder='username@email.com'/>
        <input type='password' placeholder='password'/>
        <input type="submit" value={"Login"} />
    </from>
  )
}

export default Login