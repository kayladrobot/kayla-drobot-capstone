import React from "react";
import "./CreativeCarousel.scss";

function CreativeCarousel() {
  return (
    <div className="carousel">
     <div className="carousel__card">
        <div className="carousel__card-content">
          <div className="carousel__card--front">
            <div className="carousel__card-copy">
              <h4>Jane Doe</h4>
              <p className="p--small">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                perferendis, corrupti accusamus deleniti eius officiis maiores
                at aspernatur tenetur dicta quidem deserunt explicabo
                asperiores. Quia dolorem voluptatum nobis labore iure?
              </p>
            </div>
            <h2>🎨</h2>
            <div className="carousel__categories">
              <p className="carousel__category p--small">UI Designer</p>
              <p className="carousel__category p--small">Illustator</p>
            </div>
          </div>
          <div className="carousel__card--back">
            <h4>Jane Doe</h4>
          </div>
        </div>
      </div>
      <div className="carousel__card">
        <div className="carousel__card-content">
          <div className="carousel__card--front">
            <div className="carousel__card-copy">
              <h4>Jane Doe</h4>
              <p className="p--small">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                perferendis, corrupti accusamus deleniti eius officiis maiores
                at aspernatur tenetur dicta quidem deserunt explicabo
                asperiores. Quia dolorem voluptatum nobis labore iure?
              </p>
            </div>
            <h2>🎨</h2>
            <div className="carousel__categories">
              <p className="carousel__category p--small">UI Designer</p>
              <p className="carousel__category p--small">Illustator</p>
            </div>
          </div>
          <div className="carousel__card--back">
            <h4>Jane Doe</h4>
          </div>
        </div>
      </div>
      <div className="carousel__card">
        <div className="carousel__card-content">
          <div className="carousel__card--front">
            <div className="carousel__card-copy">
              <h4>Jane Doe</h4>
              <p className="p--small">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                perferendis, corrupti accusamus deleniti eius officiis maiores
                at aspernatur tenetur dicta quidem deserunt explicabo
                asperiores. Quia dolorem voluptatum nobis labore iure?
              </p>
            </div>
            <h2>🎨</h2>
            <div className="carousel__categories">
              <p className="carousel__category p--small">UI Designer</p>
              <p className="carousel__category p--small">Illustator</p>
            </div>
          </div>
          <div className="carousel__card--back">
            <h4>Jane Doe</h4>
          </div>
        </div>
      </div>
      <div className="carousel__card">
        <div className="carousel__card-content">
          <div className="carousel__card--front">
            <div className="carousel__card-copy">
              <h4>Jane Doe</h4>
              <p className="p--small">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                perferendis, corrupti accusamus deleniti eius officiis maiores
                at aspernatur tenetur dicta quidem deserunt explicabo
                asperiores. Quia dolorem voluptatum nobis labore iure?
              </p>
            </div>
            <h2>🎨</h2>
            <div className="carousel__categories">
              <p className="carousel__category p--small">UI Designer</p>
              <p className="carousel__category p--small">Illustator</p>
            </div>
          </div>
          <div className="carousel__card--back">
            {/* <h4 className="carousel__card--back-header">Jane Doe</h4> */}
            <div className="carousel__card-image"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreativeCarousel;
