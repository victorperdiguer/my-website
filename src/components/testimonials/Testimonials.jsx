import React from "react";
import './Testimonials.css';
import TestimonialCard from "./TestimonialCard";
import data from "./data";


const Testimonials = (props) => {
  console.log(data);
  return (
    <section id="testimonials">
      <h5>What people have to say about me</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
        {data.map((testimonial, index) => 
          <TestimonialCard
            key={testimonial.index}
            picture={testimonial.picture}
            link={testimonial.link}
            name={testimonial.name}
            subtitle={testimonial.subtitle}
            review={testimonial.review}
            />
          )
        }    
      </div>
    </section>
  )
};

export default Testimonials;
