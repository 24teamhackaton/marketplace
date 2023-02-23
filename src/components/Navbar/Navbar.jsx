import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "./Img-Nav/Logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";


const Navbar = () => {
  return (
    <header id="NavBar" className="navBar">
      <img className="navBar-logo" src={logo}></img>
      <div className="navBar-line"></div>
            <div className="navBar-elements">
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
                to="SoundBox"
                spy={true}
                smooth={true}
                offset={-270}
                duration={500}>Voices</Link></h3>
              <h3><Link
              activeClass="active"
              to=""
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}Work with us>Work with us</Link></h3>
              <h3><Link
              activeClass="active"
              to=""
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>Reviews</Link></h3>
            </div>
        
      </header>
  )
}

export default Navbar