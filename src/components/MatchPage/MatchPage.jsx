import * as React from "react";
import { useState, useEffect } from "react";
import { theme, boxStyle } from "../../theme/theme";
import { ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import closeicon from "../../assets/icons/close-24px.svg";
import "./MatchPage.scss"

// // ------ import api base URL -------
import apiData from "../../data/apiData";

function compareCreative(creative, answers, correctAnswers) {
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
  
  
  
const MatchPage = ({open, handleClose}) => {
    const [answers, setAnswers] = useState([]);
    const [creatives, setCreatives] = useState([]);
    const [correctAnswers, setCorrectAnswers] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await apiData.get("/quiz");
          const quiz = response.data;
          if (quiz.length > 0) {
            const answerStrings = quiz.map((q) => q.answers).flat();
            setAnswers(answerStrings);
            const correctAnswerStrings = quiz.filter((q) => q.correct === true).map((q) => q.answers).flat();
            setCorrectAnswers(correctAnswerStrings);
          }
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }, []);

    console.log(answers)
  
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await apiData.get("/creatives");
            const creatives = response.data;
            // Sort creatives by score
            const sortedCreatives = creatives.sort((a, b) => compareCreative(b, answers, correctAnswers) - compareCreative(a, answers, correctAnswers));
            setCreatives(sortedCreatives);
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, [answers, correctAnswers]);
      

      console.log(creatives)
      console.log(compareCreative)
  
    return (
      <ThemeProvider theme={theme}>
        <Modal open={open}>
          <Box sx={boxStyle}>
            <div className="match">
              <div className="match__close-icon" onClick={handleClose}>
                <img src={closeicon} alt="close icon" />
              </div>
              <h2>Matches</h2>
              <div>
              {creatives.length > 0 && creatives.map((creative, index) => (
  <div key={index}>
    <p>
      <strong>{index + 1}. </strong>
      {creative.name} - Score: {compareCreative(creative, answers)}
    </p>
  </div>
))}
              </div>
            </div>
          </Box>
        </Modal>
      </ThemeProvider>
    );
  };
  

export default MatchPage;
