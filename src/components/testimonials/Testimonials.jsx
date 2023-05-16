import React from "react";
import './Testimonials.css';
import TestimonialCard from "./TestimonialCard";
import data from "./data";
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = (props) => {
  console.log(data);
  return (
    <section id="testimonials">
      <h5>What people have to say about me</h5>
      <h2>Testimonials</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map((testimonial, index) => {
          return (
            <SwiperSlide>
              <TestimonialCard
              key={index}
              picture={testimonial.picture}
              link={testimonial.link}
              name={testimonial.name}
              subtitle={testimonial.subtitle}
              review={testimonial.review}
              />
            </SwiperSlide>
          )
        })}    
      </Swiper>
    </section>
  )
};

export default Testimonials;
