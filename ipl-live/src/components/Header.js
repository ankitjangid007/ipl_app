import React, { useState } from 'react'
import './Header.css'


const Header = ()=> {

    const [Navbar, setNavbar] = useState(false)

    const showNavbar = () => {
        setNavbar(!Navbar)
    }

    return (
    <nav className='navbar'>
        <div className='ipl__logo'>
            <img 
                src='/images/ipl-logo.png' 
                alt='ipl-logo' 
            />
        </div>
        <div className={Navbar ? 'navMenu show' : 'navMenu'}>
            <ul>
                <li>
                    <a href="#">
                        matches
                        <div className='dropdown'>
                            <ul>
                                <li><a href="#">schedule</a></li>
                                <li><a href="#">results</a></li>
                            </ul>
                        </div>
                    </a>
                </li>
                <li><a href="#">videos</a></li>
                <li><a href="#">stats</a></li>
                <li><a href="#">point table</a></li>
                <li><a href="#">fantasy</a></li>
                <li><a href="#">teams</a></li>
                <li><a href="#">news</a></li>
                <li><a href="#">more</a></li>
            </ul>
        </div>
        <div className="toggle_btn" onClick={showNavbar}>
            <i className='fa fa-bars' />
        </div>
    </nav>
  )
}

export default Header