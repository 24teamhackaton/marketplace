import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "./Img-Nav/Logo.png";
import {Scroll} from 'react-scroll';

const Navbar = () => {
  return (
    <header className="navBar">
      <img src={logo}></img>
      <div className="navBar-line"></div>
            <div className="navBar-elements">
              <h3>Home</h3>
              <h3>Voices</h3>
              <h3>Work with us</h3>
              <h3>Reviews</h3>
            </div>
        
      </header>
  )
}

export default Navbar