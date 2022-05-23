import React from 'react'
import './navbar.scss'

function Navbar() {
  return (
    <div className='nav-container'>
        <div className='nav-left'>
            Marcel Kida
        </div>
        <div className='nav-right'>
            <a className='nav-link'>
                Work
            </a>
            <a className='nav-link'>
                Fun
            </a>
            <a className='nav-link'> 
                About
            </a>
            <a className='nav-link'>
                Contact
            </a>
        </div>
    </div>
  )
}

export default Navbar