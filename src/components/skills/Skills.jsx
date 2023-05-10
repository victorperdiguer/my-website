import React from "react";
import "./Skills.css";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiAngular,
  SiReact,
  SiCss3,
  SiHandlebarsdotjs,
  SiBootstrap,
} from "react-icons/si";
import {
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPython,
  SiMysql,
  SiDocker,
  SiRabbitmq,
  SiElastic,
} from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import {
  SiJira,
  SiAtlassian,
  SiConfluence,
  SiZendesk,
  SiFigma,
  SiMiro,
} from "react-icons/si";

const Skills = (props) => {
  return (
    <section id="skills">
      <h5>Skills</h5>
      <h2>Tech Stack</h2>

      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Frontend Development</h3>
          <div className="skills__content">
            <article className="skills__details">
              <SiHtml5 className="skills__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="skills__details">
              <SiCss3 className="skills__details-icon"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="skills__details">
              <SiJavascript className="skills__details-icon"/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="skills__details">
              <SiTypescript className="skills__details-icon"/>
              <div>
                <h4>TypeScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="skills__details">
              <SiBootstrap className="skills__details-icon"/>
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="skills__details">
              <SiHandlebarsdotjs className="skills__details-icon"/>
              <div>
                <h4>Handlebars</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="skills__details">
              <SiReact className="skills__details-icon"/>
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="skills__details">
              <SiReact className="skills__details-icon"/>
              <div>
                <h4>React Native</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="skills__backend">
          <h3>Backend Development</h3>
          <div className="skills__content">
            <article className="skills__details">
              <SiNodedotjs className="skills__details-icon"/>
              <div>
                <h4>Node</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="skills__details">
              <SiExpress className="skills__details-icon"/>
              <div>
                <h4>Express</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="skills__details">
              <SiMongodb className="skills__details-icon"/>
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="skills__details">
              <SiElastic className="skills__details-icon"/>
              <div>
                <h4>Elastic</h4>
                <small className="text-light">Basics</small>
              </div>
            </article>

            <article className="skills__details">
              <SiPython className="skills__details-icon"/>
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skills__details">
              <TbBrandMysql className="skills__details-icon"/>
              <div>
                <h4>SQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skills__details">
              <SiRabbitmq className="skills__details-icon"/>
              <div>
                <h4>Rabbit</h4>
                <small className="text-light">Basics</small>
              </div>
            </article>

            <article className="skills__details">
              <SiDocker className="skills__details-icon"/>
              <div>
                <h4>Docker</h4>
                <small className="text-light">Basics</small>
              </div>
            </article>
          </div>
        </div>

        <div className="skills__backend">
          <h3>Product Management</h3>
          <div className="skills__content">
            <article className="skills__details">
              <SiAtlassian className="skills__details-icon"/>
              <div>
                <h4>Atlassian</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="skills__details">
              <SiConfluence className="skills__details-icon"/>
              <div>
                <h4>Confluence</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="skills__details">
              <SiFigma className="skills__details-icon"/>
              <div>
                <h4>Figma</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="skills__details">
              <SiMiro className="skills__details-icon"/>
              <div>
                <h4>Miro</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="skills__details">
              <SiJira className="skills__details-icon"/>
              <div>
                <h4>Jira</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="skills__details">
              <SiZendesk className="skills__details-icon"/>
              <div>
                <h4>Zendesk</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
