import React from "react"

const TestimonialCard = ({picture, link, name, subtitle, review}) => {

  return (
    <article className="testimonial">
      <div className="testimonial__avatar">
        <a href={link}><img src={picture} alt="testimonial profile picture" /></a>
      </div>
      <div className="testimonial__subtitle">
        <h5 className="testimonial__name">{name}</h5>
        <h6>{subtitle}</h6>
      </div>
      <small className="testimonial__review">
      {review}
      </small>
    </article>
  )
};

export default TestimonialCard;
