import React from "react";
import './About.css';
import AboutCard from "./AboutCard";
import profilepicture from '../../assets/profilepicture.jpg';
import {FaAward, FaUsers, FaFolderOpen} from 'react-icons/fa';

const About = (props) => {
  return (
    <section id="about">
      <h5>Get to know me</h5>
      <h2>About Me</h2>
      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={profilepicture} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <AboutCard
              Icon={FaAward}
              title="Experience"
              subtitle={[
                "1+ Years Full Stack Developer",
                "3+ Years Project Management"
              ]}
            />
            <AboutCard
              Icon={FaUsers}
              title="Clients"
              subtitle={[
                "+20 Worldwide"
              ]}
            />
            <AboutCard
              Icon={FaFolderOpen}
              title="Projects"
              subtitle={[
                  "+15 Full Stack Projects",
                  "5 Consulting Projects"
              ]}
            />
          </div>
          <p>I'm Victor, an Industrial Engineer with a passion for software development. I have plenty of experience working in software & IT, from big consulting firms such as NTT Data to rising start-ups like Vonzu, with roles ranging from Developer to Project Manager & Product Owner.</p>
          <p>I'm also a freelance web developer, taking on a multitude of projects and contracts both individually and as part of larger teams.</p>

          <a href="#contact" className="btn btn-primary">Let's talk</a>

        </div>

      </div>
    </section>
  )
};

export default About;
