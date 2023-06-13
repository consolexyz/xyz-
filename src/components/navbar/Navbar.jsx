import React from 'react';
import { Link } from 'react-router-dom';
import './nav-bar.scss';


const Navbar = ()=> {
  return (
    <div className='nav-bar'>
        <div className='logo'>
           <Link to= "./" >Xyz.</Link>
        </div>

        <div className='nav-links'>
            <ul>
                <li>
                 <Link to="/about">About</Link>
                  </li>
                <li>
                  <Link to="/works"> Works</Link>
                  </li>
                <li>
                   <Link to= "/contact">Contact</Link>
                   </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar