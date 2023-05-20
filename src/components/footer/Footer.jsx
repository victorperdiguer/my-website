import React from "react";
import './Footer.css';
import FooterSocials from "./FooterSocials";

const Footer = (props) => {
  return (
    <footer>
      <a href="#" className="footer__logo">VÍCTOR PERDIGUER</a>
      
      <ul className="permalinks">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Experience</a></li>
        {/* <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li> */}
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <FooterSocials/>

      <div className="footer__copyright">
        <small>&copy; Víctor Perdiguer. All rights reserved.</small>
      </div>
    </footer>
  )
};

export default Footer;
