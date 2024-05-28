import React from "react";
import { HiOutlineCalendar } from "react-icons/hi";

const QualificationCard = ({ title, subtitle, dates, position }) => {
  return position % 2 === 0 ? (
    <div className="qualification__data">
      <div>
        <h3 className="qualification__title">{title}</h3>
        <span className="qualification__subtitle">{subtitle}</span>
        <div className="qualification__calendar">
          <HiOutlineCalendar className="qualification__calendar-icon" />
          {dates}
        </div>
      </div>
      <div>
        <span className="qualification__rounder"></span>
        <span className="qualification__line"></span>
      </div>
    </div>
  ) : (
    <div className="qualification__data">
      <div></div>
      <div>
        <span className="qualification__rounder"></span>
        <span className="qualification__line"></span>
      </div>
      <div>
        <h3 className="qualification__title">{title}</h3>
        <span className="qualification__subtitle">{subtitle}</span>
        <div className="qualification__calendar">
          <HiOutlineCalendar className="qualification__calendar-icon" />
          {dates}
        </div>
      </div>
    </div>
  );
};

export default QualificationCard;
