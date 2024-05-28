import React, { useState } from "react";
import "./Qualification.css";
import { HiOutlineAcademicCap, HiOutlineBriefcase } from "react-icons/hi";
import QualificationCard from "./QualificationCard";
import { experienceList } from "./experience";
import { educationList } from "./education";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const handleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section id="qualification">
      <h5>My journey</h5>
      <h2>Qualification</h2>

      <div className="qualification__container">
        {/* Qualification selector */}
        <div className="qualification__selector">
          <div
            className={
              toggleState === 1
                ? "qualification__active qualification__button"
                : "qualification__button"
            }
            onClick={() => handleTab(1)}
          >
            <div className="qualification__selector-text">
              <HiOutlineAcademicCap className="qualification__icon" />
              <h3>Education</h3>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active"
                : "qualification__button"
            }
            onClick={() => handleTab(2)}
          >
            <div className="qualification__selector-text">
              <HiOutlineBriefcase className="qualification__icon" />
              <h3>Experience</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="qualification__container container">
        <div className="qualification__sections">
          {/* Education */}
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {educationList.slice().reverse().map((education, index) => (
              <QualificationCard
                key={index}
                title={education.title}
                subtitle={education.subtitle}
                dates={education.dates}
                position={index}
              />
            ))}
          </div>

          {/* Experience */}
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {experienceList.slice().reverse().map((experience, index) => (
              <QualificationCard
                key={index}
                title={experience.title}
                subtitle={experience.subtitle}
                dates={experience.dates}
                position={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
