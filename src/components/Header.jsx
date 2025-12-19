import React from 'react'
import "./Header.css"
import {LOGO_URL} from '../utils/constant'

const Header = () => {
  return (
    <div className='header'>
        <div className='logo'>
            <img src={LOGO_URL}
            width="130px"/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Cart</li>
            </ul>
        </div>
      
    </div>
  )
}

export default Header
