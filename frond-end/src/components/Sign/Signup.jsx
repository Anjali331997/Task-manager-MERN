import React from 'react'
import './Signup.css'

const Signup = () => {
    return (
        <form>
            <h2 className='header-signup'>Sign Up</h2>
            <input type='text' placeholder='Enter you name' />
            <input type='email' placeholder='username@email.com' />
            <input type='password' placeholder='password' />
            <input type='submit' value={"Sign Up"} />
        </form>
    )
}

export default Signup