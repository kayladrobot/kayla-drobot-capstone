import React from "react";
import "./JobCard.scss";

const JobCard = ({ filteredData }) => {
  return (
    <main className="joblist">
    <div className="joblist__wrapper">
      {filteredData.map((item) => (
        <div className="joblist__card">
          <img src={item.image} alt="" className="joblist__icon" />
          <div className="joblist__content">
          <div className="joblist__info">
            <p>{item.job_type}</p>
            <p>{item.rate}</p>
            </div>
            <div className="joblist__copy">
            <h4>{item.job_title}</h4>
              <p>{item.employer_name}</p>
              </div>
              <p>{item.job_description}</p>
              <div className="joblist__bottom">
              <div className="joblist__categories">
                {item.labels.map((label) => (
                  <p className="joblist__category p--small">{label}</p>
                ))}
              </div>
              <button className="joblist__button">Apply</button>
              </div>
            </div>
          </div>
      ))}
    </div>
    </main>
  );
};

export default JobCard;
