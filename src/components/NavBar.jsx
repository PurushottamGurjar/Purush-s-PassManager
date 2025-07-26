import React from 'react'
import "./NavBar.css"

const NavBar = () => {
  return (
    <div className='navbar-container'>
        <div className="navbar-title">Purush Passwords</div>
        <div className="navbar-elements">
            <p className="each-nav-element">Home</p>
            <p className="each-nav-element">About</p> 
            <p className="each-nav-element">Developer</p>
        </div>

      
    </div>
  )
}

export default NavBar;
