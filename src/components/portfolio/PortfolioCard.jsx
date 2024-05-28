import React from "react"

const PortfolioCard = ({title, description, image, demoURL, githubURL, technologies}) => {
  return (
    <article className="portfolio__item">
      <div className="portfolio__item-image">
        <img src={image} alt="" />
        <div className="portfolio__item-info">
          <p>{description}</p>
          <p>
            {technologies.map((technology, index) => (
              <span key={technology + "-" + index}>
                {technology()}&nbsp;
              </span>
            ))}
          </p>
        </div>
      </div>

      <h3>{title}</h3>
      <div className="portfolio__item-cta">
        <a
          href={githubURL}
          className="btn"
          target="_blank"
        >
          Github
        </a>
        <a
          href={demoURL}
          className="btn btn-primary"
          target="_blank"
        >
          Live Demo
        </a>
      </div>
    </article>
  );
};

export default PortfolioCard;
