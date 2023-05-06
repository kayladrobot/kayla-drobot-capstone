import React from "react";
import "./CreativeCarousel.scss";

function CreativeCarousel({ creativeData }) {
  console.log(creativeData);
  return (
    <div className="carousel">
      {creativeData.slice(0, 4).map((item, index) => (
        <div className="carousel__card" key={index}>
          <div className="carousel__card-content">
            <div className="carousel__card--front">
              <div className="carousel__card-copy">
                <h4>{item.name}</h4>
                <p className="p--small">
                  {item.bio.slice(0, 140)}
                  {item.bio.length > 140 ? "..." : ""}
                </p>
              </div>
              <h2>🎨</h2>
              <div className="carousel__categories">
                {item.labels.map((label) => (
                  <p className="carousel__category p--small">{label}</p>
                ))}
              </div>
            </div>
            <div className="carousel__card--back" style={{ backgroundImage: `url(${item.profile})` }}>
              <h4>{item.name}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CreativeCarousel;
