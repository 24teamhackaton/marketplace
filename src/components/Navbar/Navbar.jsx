import React from "react";
import "./Navbar.css";
import logo from "./Img-Nav/Logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import HamburgerIcon from "./Img-Nav/HamburgerIcon.png"
import { useState } from "react";


const Navbar = () => {
  
  const [menu,setMenu] = useState (false); 

 function ToogleMenu(){
   setMenu(!menu)
 }
  
  return (
    <header id="NavBar" className="navBar">
      <img className="navBar-logo" alt="company logo "src={logo}></img>
      <div className="navBar-line"></div>
      <button onClick={ToogleMenu} className="navBar-button">
              <img src={HamburgerIcon} alt="icon hamburger"></img>
            </button>
            <nav className={`navBar-elements ${menu ? 'isActive' : ''}`}>
              <h3><Link
                activeClass="active"
                to=""
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >Home</Link></h3>
              <h3><Link
                activeClass="active"
                to="soundBox"
                spy={true}
                smooth={true}
                offset={-270}
                duration={500}>Voices</Link></h3>
              <h3><Link
              activeClass="active"
              to="workWithUs"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>Work with us</Link></h3>
              <h3><Link
              activeClass="active"
              to=""
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>Reviews</Link></h3>
            
            </nav>
            
            
            
            
            
        
      </header>
  )
}

export default Navbar