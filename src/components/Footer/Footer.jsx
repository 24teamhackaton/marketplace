import React from "react";
import Link from "react-scroll/modules/components/Link";
import Home from "../../pages/Home/Home";
import "./Footer.css";
import WhiteLogo from '../../assets/img/whiteLogo.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (
        <footer id="Footer" className="containerFooter">
            <div className="footerRow">
                <div className="footerColumn">
                    <img id="infoWhiteLogo"
                            src={ WhiteLogo }
                            alt="White logo from Real Dream Voices"
                        />
                        <p id="infoDescription">
                       In Real Dream Voices we are specialized in selling all kinds of 
                       voices to fulfill all kinds of dreams. 
                        </p>
                        <Link id="infoTerms" to="/" element={ <Home /> }>
                            Privacy & Cookie Policy
                        </Link>
                </div>

                <div >
                    <div className="footerColumn">
                    <h3 className="footerTitle">
                        Contact
                    </h3>
                    </div>
                    
                    <ul className="contactOption">
                        <li className="optionEmailTelephone"><FontAwesomeIcon style={{margin:"0"}} icon={ faEnvelope }/>
                            contact@realdreamvoices.com
                        </li>
                        <li className="optionEmailTelephone"><FontAwesomeIcon style={{margin:"0"}} icon={ faPhone }/>
                            +34 985 73 33 11 
                        </li>
                    </ul>
                </div>

                <div className="footerColumn">
                    <h3 className="footerTitle">
                        Social media
                    </h3>
                    <div className="footerColumn-mediaLinks">
                    <a className="buttonMedia" href="https://twitter.com/" target="_blank" alt="Follow us on Twitter!">
                    <button className="buttonMedia">
                            <FontAwesomeIcon icon={ faTwitter }/>
                        </button></a>
                            <a className="buttonMedia" href="https://facebook.com/" target="_blank" alt="Follow us on Facebook!">
                        <button className="buttonMedia">
                            <FontAwesomeIcon icon={ faFacebookF }/>
                        </button>
                        </a>
                        <a className="buttonMedia" href="https://instagram.com/" target="_blank" alt="Follow us on Instagram!">
                        <button className="buttonMedia" >
                            <FontAwesomeIcon icon={ faInstagram }/>
                        </button>
                        </a>
                        <a className="buttonMedia" href="https://linkedin.com/" target="_blank" alt="Follow us on Linkedin!">
                        <button className="buttonMedia">                            
                           <FontAwesomeIcon icon={ faLinkedinIn }/>
                        </button>
                        </a>
                        </div>
                </div>
                
                <div className="footerColumn">
                    <p id="copyrightText">© Copyright 2023 Real Dream Voices</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;