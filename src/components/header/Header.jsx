import React from "react"
import './Header.css';
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import profilepicture from '../../assets/profilepicture.jpg'

const Header = (props) => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello! I'm</h5>
        <h1>Víctor Perdiguer</h1>
        <h5 className="text-light">Product Owner & Full-Stack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="profile-picture">
          <img src={profilepicture} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
};

export default Header;
