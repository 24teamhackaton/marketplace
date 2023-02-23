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
            <div class="footerRow">
                <div class="footerColumn">
                    <img id="infoWhiteLogo"
                            src={ WhiteLogo }
                            alt="White logo from Real Dream Voices"
                        />
                        <p id="infoDescription">
                        Lorem Ipsum is simply dummy text of the printing 
                        and typesetting industry. Lorem Ipsum has been 
                        the industry's standard.
                        </p>
                        <Link id="infoTerms" to="/" element={ <Home /> }>
                            Privacy & Cookie Policy
                        </Link>
                </div>

                <div class="footerColumn">
                    <h3 className="footerTitle">
                        Contact
                    </h3>
                    <ul className="contactOption">
                        <li className="optionEmailTelephone"><FontAwesomeIcon icon={ faEnvelope }/>
                            contact@realdreamvoices.com
                        </li>
                        <li className="optionEmailTelephone"><FontAwesomeIcon icon={ faPhone }/>
                            +34 985 73 33 11
                        </li>
                    </ul>
                </div>

                <div class="footerColumn">
                    <h3 className="footerTitle">
                        Social media
                    </h3>
                    <button className="buttonMedia">
                            <a href="https://twitter.com/" target="_blank" alt="Follow us on Twitter!"/>
                            <FontAwesomeIcon icon={ faTwitter }/>
                        </button>
                        <button className="buttonMedia">
                            <a href="https://facebook.com/" target="_blank" alt="Follow us on Facebook!"/>
                            <FontAwesomeIcon icon={ faFacebookF }/>
                        </button>
                        <button className="buttonMedia">
                            <a href="https://instagram.com/" target="_blank" alt="Follow us on Instagram!"/>
                            <FontAwesomeIcon icon={ faInstagram }/>
                        </button>
                        <button className="buttonMedia">
                            <a href="https://linkedin.com/" target="_blank" alt="Follow us on Linkedin!"/>
                            <FontAwesomeIcon icon={ faLinkedinIn }/>
                        </button>
                </div>

                <div class="footerColumn">
                    <p id="copyrightText">© Copyright 2023 Real Dream Voices</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;