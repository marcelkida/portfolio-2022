import React from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'
import resume from '../../src/MarcelKidaResume.pdf'

function Navbar() {
    return (
<>
            <div className='nav-container border-b-2 border-black fixed top-0'>
<Link to='/'>
                    <div className='nav-left'>
                        marcel kida
                    </div>
</Link>
                <div className='nav-right pointer-events-auto'>
                    <a className='nav-link' href={resume} target="_blank">
                        resume
                    </a>
                    <Link className='nav-link' to='/'>
                        work
                    </Link>
                    <Link className='nav-link' to='/about'>
                        about
                    </Link>
                </div>
                
            </div>
</>
    )
}

export default Navbar