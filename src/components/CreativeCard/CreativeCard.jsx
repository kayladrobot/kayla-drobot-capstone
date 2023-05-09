import React from "react";
import { useState, useEffect } from "react";

// // ------ import api base URL -------
import apiData from "../../data/apiData";
import "./CreativeCard.scss";

function CreativeCard() {
  const [loading, setLoading] = useState(true);
  const [creativeData, setCreativeData] = useState([]);

  //   // -----  useEffect/ apiData -----
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiData.get("/creatives");
        const creatives = response.data;
        setCreativeData(creatives);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="cardlist">
      <h1 className="cardlist__header">Creatives</h1>
      <div className="cardlist__container">
        {creativeData.map((item, index) => (
          <div className="cardlist__card" key={index}>
            <div className="cardlist__content">
              {item.image.map((image) => (
                <img src={image[0]} alt="test" className="cardlist__card-img" />
              ))}
              <div className="cardlist__card-copy">
                <h4>{item.name}</h4>
                <p className="p--small">
                  {item.bio.slice(0, 140)}
                  {item.bio.length > 140 ? "..." : ""}
                </p>
              </div>
            </div>
            <div className="cardlist__categories">
              {item.labels.map((label) => (
                <p className="cardlist__category p--small">{label}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreativeCard;
