import * as React from "react";
import { useState, useEffect } from "react";
import { theme, boxStyle } from "../../theme/theme";
import { ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import closeicon from "../../assets/icons/close-24px.svg";
import "./MatchPage.scss";

// // ------ import api base URL -------
import apiData from "../../data/apiData";

function compareCreative(creative, answers) {
  let count = 0;

  function searchNestedArrays(obj) {
    if (Array.isArray(obj)) {
      for (let i = 0; i < obj.length; i++) {
        searchNestedArrays(obj[i]);
      }
    } else if (typeof obj === "object" && obj !== null) {
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          searchNestedArrays(obj[key]);
        }
      }
    } else if (answers && answers.includes(obj)) {
      count++;
    }
  }

  searchNestedArrays(creative);
  return count;
}

const MatchPage = ({ open, handleClose }) => {
  const [answers, setAnswers] = useState([]);
  const [creatives, setCreatives] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [currentCreative, setCurrentCreative] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiData.get("/quiz");
        const quiz = response.data;
        if (quiz.length > 0) {
          const answerStrings = quiz.map((q) => q.answers).flat();
          setAnswers(answerStrings);
          const correctAnswerStrings = quiz
            .filter((q) => q.correct === true)
            .map((q) => q.answers)
            .flat();
          setCorrectAnswers(correctAnswerStrings);
        }
        setCreatives([]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiData.get("/creatives");
        const creatives = response.data;
        // Sort creatives by score
        const sortedCreatives = creatives.sort(
          (a, b) =>
            compareCreative(b, answers, correctAnswers) -
            compareCreative(a, answers, correctAnswers)
        );
        setCreatives(sortedCreatives);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [answers, correctAnswers]);

  return (
    <ThemeProvider theme={theme}>
      <Modal open={open}>
        <Box sx={boxStyle}>
          <div className="match__close-icon" onClick={handleClose}>
            <img src={closeicon} alt="close icon" />
          </div>
          <div className="match">
            <h2>Matches</h2>
            {creatives.length > 0 &&
              currentCreative >= 0 &&
              currentCreative < creatives.length && (
                <div key={currentCreative} className="match__creative">
                  {creatives[currentCreative].image.map((image) => (
                    <img
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
                      <p>See Profile →</p>
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
