import React from "react";
import './About.css';
import AboutCard from "./AboutCard";
import profilepicture2 from '../../assets/profilepicture-2.jpg';
import {FaAward, FaUsers, FaFolderOpen} from 'react-icons/fa';

const About = (props) => {
  return (
    <section id="about">
      <h5>Get to know me</h5>
      <h2>About Me</h2>
      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={profilepicture2} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <AboutCard
              Icon={FaAward}
              title="Experience"
              subtitle={[
                "2+ Years Full Stack Developer",
                "4+ Years Product Management"
              ]}
            />
            <AboutCard
              Icon={FaUsers}
              title="Clients"
              subtitle={[
                "+20 Projects",
                "+7 Countries"
              ]}
            />
            <AboutCard
              Icon={FaFolderOpen}
              title="Projects"
              subtitle={[
                  "Full Stack Developer",
                  "Hands-on Consultant",
                  "Product Design & Management"
              ]}
            />
          </div>
          <p>I'm Victor, an Industrial Engineer with a passion for software development. I have plenty of experience working in software & IT, from big consulting firms such as NTT Data to rising start-ups like Vonzu, with roles ranging from Developer to Project Manager & Product Manager.
          <br />
          <br />
          I'm also a freelance web developer, taking on a multitude of projects and contracts both individually and as part of larger teams.
          </p>

          <a href="#contact" className="btn btn-primary">Let's talk</a>

        </div>

      </div>
    </section>
  )
};

export default About;
