import React from 'react';
import { Link } from 'react-router-dom';
import './nav-bar.scss';


const Navbar = ()=> {
  return (
    <div className='nav-bar'>
        <div className='logo'>
           <Link to= "./" className='nav-link' >Xyz.</Link>
        </div>

        <div className='nav-links'>
            <ul>
                <li>
                 <Link to="/about" className='nav-link'>About</Link>
                  </li>
                <li>
                  <Link to="/works" className='nav-link' > Works</Link>
                  </li>
                <li>
                   <Link to= "/contact" className='nav-link'>Contact</Link>
                   </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar