import React from "react";
import "./JobCarousel.scss";

function JobData({ jobData }) {
  return (
    <div className="jobcarousel">
      {jobData.slice(0, 4).map((item, index) => (
        <React.Fragment key={index}>
          <div className="jobcarousel__card">
            <div className="jobcarousel__card-inner">
              <div className="jobcarousel__card-front">
                <div className="jobcarousel__content">
                  <h4>{item.job_title}</h4>
                  <p>{item.employer_name}</p>
                  <p>{item.job_description}</p>
                </div>
                <div className="jobcarousel__categories">
                  {item.labels.map((label) => (
                    <p className="jobcarousel__category p--small">{label}</p>
                  ))}
                </div>
              </div>
              <div className="jobcarousel__card-back">
                <p>{item.type}</p>
                <div className="jobcarousel__img-container">
                  <img
                    src={item.image}
                    alt="test"
                    className="jobcarousel__img"
                  />
                </div>
                <p>{item.email}</p>
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default JobData;
