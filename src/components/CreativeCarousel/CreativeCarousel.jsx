import React from "react";
import "./CreativeCarousel.scss";

function CreativeCarousel({ creativeData }) {
  return (
    <div className="carousel">
        {creativeData.slice(0, 4).map((item, index) => (
                <div className="carousel__card-wrapper">
          <React.Fragment key={index}>
            <div className="carousel__card">
              <div className="carousel__card-inner">
                <div className="carousel__card-front">
                  {item.image.map((image) => (
                    <div className="carousel__img-container">
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
                    <div className="carousel__img-container">
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
                  <p className="p--small">{item.title}</p>
                </div>
                <div className="carousel__categories">
                  {item.labels.map((label) => (
                    <p className="carousel__category p--small">{label}</p>
                  ))}
                </div>
              </div>
          </React.Fragment>
          </div>
        ))}
    </div>
  );
}

export default CreativeCarousel;

//   console.log(creativeData);
//   return (
//     <div className="carousel">
//       {creativeData.slice(0, 4).map((item, index) => (
//         <div className="carousel__card" key={index}>
//           <div className="carousel__card--front">
//             {item.image.map((image) => (
//               <img src={image[0]} alt="test" className="carousel__card-img" />
//             ))}
//           </div>

//           {item.image.map((image) => (
//             <div className="carousel__card--back">
//               <img src={image[0]} alt="test" className="carousel__card-img" />
//             </div>
//           ))}

//           <div className="carousel__card-content">
//             <div className="carousel__card-copy">
//               <h4>{item.name}</h4>
//               <p className="p--small">
//                 {item.bio.slice(0, 140)}
//                 {item.bio.length > 140 ? "..." : ""}
//               </p>
//             </div>
//             <h2>🎨</h2>
//             <div className="carousel__categories">
//               {item.labels.map((label) => (
//                 <p className="carousel__category p--small">{label}</p>
//               ))}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
