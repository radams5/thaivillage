import React, { Component } from 'react';
import './NavBar.css'
import {Link} from 'react-router-dom'


class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <div className='NavBarLogoDiv'>
          Thai Village
          {/* <img src={Logo} alt='Thai Lamp Logo' className="LampLogoImage"/> */}
        </div>
        <div className="NavBarMenuDiv">
          <ul>
            <li><Link to='/' className='NavBarLinks'>Home</Link></li>
            <li><Link to='/Menu' className='NavBarLinks'>Menu</Link></li>
            <li><Link to='/Catering' className='NavBarLinks'>Catering</Link></li>
            <li><Link to='/Location' className='NavBarLinks'>Location</Link></li>
            <li><Link to='/Takeout' className='NavBarLinks'>Order Takeout</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;