import React from "react";

const AboutCard = ({Icon, title, subtitle}) => {
  return (
    <article className="about__card">
      <Icon className="about__icon"/>
      <h5>{title}</h5>
      <ul>
        {subtitle.map((elem, index) => {
          return (
            <li key={index}><small>{elem}</small></li>
          )
        })}
      </ul>
    </article>
  )
};

export default AboutCard;
