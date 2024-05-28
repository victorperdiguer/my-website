import React from "react"

import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { SiHandlebarsdotjs } from "react-icons/si";
import { FiCode} from 'react-icons/fi';
import { SiMongodb } from "react-icons/si";
import { GrNode } from "react-icons/gr";

const PortfolioCard = ({title, description, image, demoURL, githubURL, technologies}) => {
  return (
    <article className="portfolio__item">
      <div className="portfolio__item-image">
        <img src={image} alt="" />
        <div className="portfolio__item-info">
          <p>{description}</p>
          <p>
            <AiFillHtml5 /> <IoLogoCss3 /> <IoLogoJavascript />
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
