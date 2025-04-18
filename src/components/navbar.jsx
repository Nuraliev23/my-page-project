import React from 'react'
import logo from "../assets/Dummy Logo.png"
import "./nav.css"
const Headernav = () => {
  return (
    <div>
      <nav>
        <img src={logo} alt="" />
        <ul>
          <li>About</li>
          <li>Services</li>
          <li>Client</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
        <button className='log'>Login</button>
      </nav>
    </div>
  )
}

export default Headernav