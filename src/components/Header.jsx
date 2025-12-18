import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
        <div className='logo'>
            <img src='https://img.freepik.com/premium-vector/food-logo-with-smile-spoon-fork-delicious-food-design-illustration-tongue-saliva_207371-61.jpg?w=2000'
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
