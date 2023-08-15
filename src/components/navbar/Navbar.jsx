import React from 'react';
import './nav-bar.scss';


const Navbar = ()=> {
  return (
    <div className='nav-bar'>
        <div className='logo'>
           <a herf= "./" className='nav-link' >Xyz. </a>
        </div>

        <div className='nav-links'>
            <ul>
                <li>
                 <a herf="#" className='nav-link'>About</a>
                  </li>
                <li>
                  <a herf="#" className='nav-link' > Gallery</a>
                  </li>
                <li>
                   <a  herf= "#" className='nav-link'>Contact</a>
                   </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar