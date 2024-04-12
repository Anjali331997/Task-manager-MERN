import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='header_name'>
                <h4>Task Manager</h4>
            </div>
            <div className='profile'>
                <p>User Name</p>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwcCMK76hlQuMHQO1sC30jBgPCnJuwIN9bmw&usqp=CAU" alt="profile_icon" />
            </div>
        </div>
    )
}

export default Header