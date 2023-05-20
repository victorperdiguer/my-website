import React from "react"

const ContactOption = ({Icon, title, subtitle, cta, action}) => {
  return (
    <article className="contact__option">
      <Icon className="contact__option-icon"/>
      <h4>{title}</h4>
      <h5>{subtitle}</h5>
      <a href={action} target="_blank">{cta}</a>
      
    </article>
  )
};

export default ContactOption;
