import React from 'react'
import './navbar.scss'

function Navbar() {
    return (
        <div className='nav-container'>
            <div className='nav-left'>
                marcel kida
            </div>
            <div className='nav-right'>
                <a className='nav-link'>
                    work
                </a>
                <a className='nav-link'>
                    about
                </a>
            </div>
        </div>
    )
}

export default Navbar