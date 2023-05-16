import React from "react";
import { Link } from "react-router-dom";
import "./CreativeCarousel.scss";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function CreativeCarousel({ creativeData }) {
  const responsive = {
    0: { items: 1 },
    576: { items: 2 },
    768: { items: 3 },
    992: { items: 4 },
  };

  return (
    <>
      <div className="carousel">
        <AliceCarousel
          items={creativeData.map((item, index) => (
            <Link to={`/creatives/${item.id}`} key={index}>
              <div className="carousel__card-wrapper">
                <React.Fragment>
                  <div className="carousel__card">
                    <div className="carousel__card-inner">
                      <div className="carousel__card-front">
                        {item.image.map((image) => (
                          <div
                            className="carousel__img-container"
                            key={image[0]}
                          >
                            <img
                              src={image[0]}
                              alt="test"
                              className="carousel__img"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="carousel__card-back">
                        {item.image.map((image) => (
                          <div
                            className="carousel__img-container"
                            key={image[1]}
                          >
                            <img
                              src={image[1]}
                              alt="test"
                              className="carousel__img"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="carousel__card-content">
                    <div className="carousel__card-copy">
                      <h4>{item.name}</h4>
                      <p className="p--large">{item.title}</p>
                    </div>
                    <div className="carousel__categories">
                      {item.labels.map((label) => (
                        <p className="carousel__category p--small" key={label}>
                          {label}
                        </p>
                      ))}
                    </div>
                  </div>
                </React.Fragment>
              </div>
            </Link>
          ))}
          responsive={responsive}
          dotsDisabled={true} // Optional: Disable the dots pagination
          buttonsDisabled={true} // Optional: Disable the navigation buttons
        />
      </div>
    </>
  );
}

export default CreativeCarousel;
