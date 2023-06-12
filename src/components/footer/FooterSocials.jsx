import React from "react"
import {BsLinkedin, BsGithub} from 'react-icons/bs';

const FooterSocials = () => {
  return (
    <div className="footer__socials">
      <a href="https://www.linkedin.com/in/victorperdiguer/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/victorperdiguer" target="_blank"><BsGithub/></a>      
    </div>
  )
};

export default FooterSocials;
