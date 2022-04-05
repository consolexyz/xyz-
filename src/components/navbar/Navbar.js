import React from 'react';
import './nav-bar.scss';


const Navbar = ()=> {
  return (
    <div className='nav-bar'>
        <div className='logo'>
            Xyz
        </div>

        <div className='nav-links'>
            <ul>
                <li>About</li>
                <li>Works</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar