import React from "react";
import "./Navbar.css";
import logo from "./Img-Nav/Logo.svg";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import HamburgerIcon from "./Img-Nav/HamburgerIcon.png";
import { useState } from "react";
import Voice from "../../components/Voice/Voice";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  function ToogleMenu() {
    setMenu(!menu);
  }

  return (
    <>
      <header id="NavBar" className="navBar">
        <img className="navBar-logo" alt="company logo " src={logo}></img>
        <div className="navBar-line"></div>
        <button onClick={ToogleMenu} className="navBar-button">
          <img src={HamburgerIcon} alt="icon hamburger"></img>
        </button>
        <nav className={`navBar-elements ${menu ? "isActive" : ""}`}>
          <h3>
            <NavLink className="navBar-link" to="/">
              Home
            </NavLink>
          </h3>
          <h3>
            <Link
              className="navBar-link"
              activeClass="active"
              to="soundBox"
              spy={true}
              smooth={true}
              offset={-300}
              duration={500}
            >
              Voices
            </Link>
          </h3>
          <h3>
            <Link
              className="navBar-link"
              activeClass="active"
              to="workWithUs"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
            >
              Work with us
            </Link>
          </h3>
          <h3>
            <Link
              className="navBar-link"
              activeClass="active"
              to="Review"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
            >
              Reviews
            </Link>
          </h3>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
