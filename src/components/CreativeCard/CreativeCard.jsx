import React from "react";
// import { useState, useEffect } from "react";

// // ------ import api base URL -------
// import apiData from "../../data/apiData";
import "./CreativeCard.scss";

function CreativeCard({ filteredData }) {
  console.log(filteredData);

  return (
    <div className="cardlist">
      <div className="cardlist__container">
        {filteredData.map((item) => (
          <div className="cardlist__card">
            <div key={item.id}>
              <div className="cardlist__img-container">
              {item.image.map((image, index) => (
                <img
                  key={`image-${index}`} // Provide a unique key
                  src={image[0]}
                  alt="test"
                  className="cardlist__card-img"
                />
              ))}
              </div>
              <div className="cardlist__content">
                <div className="cardlist__copy">
                  <h4>{item.name}</h4>
                  <p className="p--large">{item.title}</p>
                </div>
                <p>
                  {item.bio.slice(0, 140)}
                  {item.bio.length > 140 ? "..." : ""}
                </p>
              </div>
            </div>
            <div className="cardlist__categories">
              {item.labels.map((label, index) => (
                <p
                  key={`label-${index}`}
                  className="cardlist__category p--small"
                >
                  {label}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* <h1 className="cardlist__header">Creatives</h1> 
      <h2>{filteredData.name}</h2>
      <div className="cardlist__container">
        <div className="cardlist__card">
          <div className="cardlist__content">
            {image.map((image, index) => (
              <img
                key={`image-${index}`} // Provide a unique key
                src={image[0]}
                alt="test"
                className="cardlist__card-img"
              />
            ))}
            <div className="cardlist__card-copy">
              <h4>{name}</h4>
              <p className="p--small">
                {bio.slice(0, 140)}
                {bio.length > 140 ? "..." : ""}
              </p>
            </div>
          </div>
          <div className="cardlist__categories">
            {labels.map((label, index) => (
              <p key={`label-${index}`} className="cardlist__category p--small">
                {label}
              </p>
            ))}
          </div>
        </div>
      </div>  */}
    </div>
  );
}

export default CreativeCard;
