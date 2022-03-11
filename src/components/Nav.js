import React, {useState} from 'react'
import "../App.css"
import {GiHamburgerMenu} from "react-icons/gi"


function Nav() {

    const [showLinks, setShowLinks] = useState(false);
  return (
    <div className='Navbar' >
    <div className="leftSide">
        <div className="Links" id={showLinks ? "hidden" : ""}>
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
    </div>
    <button onClick={() => setShowLinks(!showLinks)} > <GiHamburgerMenu /></button>
    </div>
    <div className="rightSide">
    <input type="text" placeholder='Search...' />
    <button>Search</button>

    </div>
        </div>
  )
}

export default Nav