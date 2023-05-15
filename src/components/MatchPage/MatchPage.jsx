import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { theme, boxStyle } from "../../theme/theme";
import { ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import closeicon from "../../assets/icons/close-24px.svg";
import "./MatchPage.scss";

// // ------ import api base URL -------
import apiData from "../../data/apiData";

// function compareCreative(creative, answers) {
//   let count = 0;

//   function searchNestedArrays(obj) {
//     if (Array.isArray(obj)) {
//       for (let i = 0; i < obj.length; i++) {
//         searchNestedArrays(obj[i]);
//       }
//     } else if (typeof obj === "object" && obj !== null) {
//       for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//           searchNestedArrays(obj[key]);
//         }
//       }
//     } else if (answers.includes(obj)) {
//       count++;
//     }
//   }

//   searchNestedArrays(creative);
//   return count;
// }


const MatchPage = ({open, handleClose, quizData}
  ) => {
  const [answers, setAnswers] = useState([]);
  const [creatives, setCreatives] = useState([]);
  const [currentCreative, setCurrentCreative] = useState(0);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiData.get("/answers");
        const quiz = response.data.pop();
        setAnswers(quiz);
        console.log(answers)
        setCreatives([]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

const compareCreative = (creative) => {
  let count = 0;
  const answerStrings = answers.answers.map((q) => q.toLowerCase());
  const creativeString = JSON.stringify(creative).toLowerCase();

  for (let i = 0; i < answerStrings.length; i++) {
    if (creativeString.includes(answerStrings[i])) {
      count++;
    }
  }

  return count;
};

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await apiData.get("/creatives");
      const fetchedCreatives = response.data;
      const sortedCreatives = fetchedCreatives.sort(
        (a, b) => compareCreative(b) - compareCreative(a)
      );
      setCreatives(sortedCreatives);
    } catch (error) {
      console.error(error);
    }
  };

  fetchData();
}, [answers]);


  return (
    <ThemeProvider theme={theme}>
      <Modal open={open}>
        <Box sx={boxStyle}>
          <div className="match__container">
            <div className="match__close-icon" onClick={handleClose}>
              <img src={closeicon} alt="Close" /> 
            </div>
          </div>
          <div className="match">
            <h2>Matches</h2>
            {creatives.length > 0 &&
              currentCreative >= 0 &&
              currentCreative < creatives.length && (
                <div key={currentCreative} className="match__creative">
                  {creatives[currentCreative].image.map((image) => (
                    <img
                      key={image[0]}
                      src={image[0]}
                      alt=""
                      className="match__creative-img"
                    />
                  ))}
                  <div className="match__creative-copy">
                    <h3>{creatives[currentCreative].name}</h3>
                    <p>{creatives[currentCreative].title}</p>
                    <div className="match__categories">
                      <div className="match__category-row">
                        {creatives[currentCreative].labels
                          .slice(0, 4)
                          .map((label) => (
                            <p className="match__category p--small">{label}</p>
                          ))}
                      </div>
                      <div className="match__category-row">
                        {creatives[currentCreative].labels
                          .slice(5, 10)
                          .map((label) => (
                            <p className="match__category p--small">{label}</p>
                          ))}
                      </div>
                    </div>
                    <div className="match__creative-cta">
                    <Link to={`/creatives/${creatives[currentCreative].id}`}>
                      <p onClick={handleClose}>See Profile →</p>
                    </Link>
                      <p>Contact →</p>
                    </div>
                  </div>
                </div>
              )}
            <div className="match__button-container">
              <button
                className="match__button-back"
                onClick={() => setCurrentCreative(currentCreative - 1)}
              >
                Back
              </button>
              <button
                className="match__button-next"
                onClick={() => setCurrentCreative(currentCreative + 1)}
              >
                Next
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </ThemeProvider>
  );
};

export default MatchPage;
