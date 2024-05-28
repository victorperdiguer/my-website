/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./Portfolio.css";
import PortfolioCard from "./PortfolioCard";
import { portfolioList } from "./portfolioList";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { SiHandlebarsdotjs } from "react-icons/si";
import { FiCode } from "react-icons/fi";
import { SiMongodb } from "react-icons/si";
import { GrNode } from "react-icons/gr";

const About = () => {
  return (
    <section id="portfolio">
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {portfolioList.map((portfolio, index) => (
          <PortfolioCard
            key={portfolio.title + "-" + index}
            title={portfolio.title}
            description={portfolio.description}
            image={portfolio.image}
            demoURL={portfolio.demoURL}
            githubURL={portfolio.githubURL}
            technologies={portfolio.technologies}
          />
        ))}
        {/* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={guessr} alt="" />
            <div className="portfolio__item-info">
              <p>Technologies used:</p>
              <p><AiFillHtml5 /> <IoLogoCss3 />  <IoLogoJavascript/></p>
            </div>
          </div>

          <h3>Guessr - DOM logic game</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/jormengin/Guessr"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://jormengin.github.io/Guessr/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={devault} alt="" />
            <div className="portfolio__item-info">
              <p>Technologies used:</p>
              <p><AiFillHtml5 /> <IoLogoCss3 />  <IoLogoJavascript/> <SiHandlebarsdotjs/><br /> <FiCode /><SiMongodb /><GrNode /></p>
            </div>
          </div>
          <h3>Devault - Dev Tools platform </h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/deVault-io/devault"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://devault-app.fly.dev/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={wip} alt="" />
            <div className="portfolio__item-info">
              <p>Fullstack app using MERN stack coming soon</p>
            </div>
          </div>
          <h3>atmine - Fullstack rental webapp</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/jormengin/Guessr"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://jormengin.github.io/Guessr/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article> */}
      </div>
    </section>
  );
};

export default About;
