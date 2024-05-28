/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./Portfolio.css";
import PortfolioCard from "./PortfolioCard";
import { portfolioList } from "./portfolioList";

const About = () => {
  return (
    <section id="portfolio">
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {portfolioList.slice().reverse().map((portfolio, index) => (
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
      </div>
    </section>
  );
};

export default About;
