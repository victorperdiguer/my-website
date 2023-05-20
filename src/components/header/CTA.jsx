import React from "react";
import cv from '../../assets/cv.pdf';

const CTA = (props) => {
  return (
    <div className="cta">
      <a href={cv} download className="btn">Download CV</a>
      <a href="#contact" className="btn btn-primary">Let's talk!</a>
    </div>
  )
};

export default CTA;
