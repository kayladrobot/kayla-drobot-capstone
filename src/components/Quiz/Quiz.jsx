import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { theme, boxStyle } from "../../theme/theme";
import { ThemeProvider } from "@mui/material";
import close from "../../assets/icons/close-24px.svg";
import "./Quiz.scss";

import apiData from "../../data/apiData";
import QuestionPage from "../QuestionPage/QuestionPage";
import SubmitPage from "../QuestionSubmit/QuestionSubmit";

function Quiz({ open, handleClose }) {
  const [currentQuiz, setCurrentQuiz] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState([])
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [quizCompleted, isQuizCompleted] = useState(false);
  const [introQuizCompleted, isintroQuizCompleted] = useState(false)


  const handleEmployeerQuizClick = async () => {
    try {
      const response = await apiData.get("/quiz-for-employeers");
      const quizResponse = response.data;
      setCurrentQuiz(quizResponse);
      setCurrentQuestion(1);
      isintroQuizCompleted(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreativeQuizClick = async () => {
    try {
      const response = await apiData.get("/quiz-for-creatives");
      const quizResponse = response.data;
      setCurrentQuiz(quizResponse);
      setCurrentQuestion(1);
      isintroQuizCompleted(true);
    } catch (error) {
      console.error(error);
    }
  };
  const totalQuestions = currentQuiz.length;
    const progress = Math.round((currentQuestion / totalQuestions) * 100 * 0.9);
    const progressBarStyle = {
    width: `${progress}%`,
  };


  const handleNextQuestion = (selectedAnswer) => {
    setSelectedAnswers([...selectedAnswers, selectedAnswer]);
    if (currentQuestion === totalQuestions) {
      isQuizCompleted(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePreviousQuestion = (event) => {
    if (currentQuestion === 1) {
      return handleClose();
    } else {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Modal open={open}>
        <Box sx={boxStyle}>
          {!introQuizCompleted && (
            <div className="intro">
              <div className="modal__close-icon" onClick={handleClose}>
                <img src={close} alt="close icon" />
              </div>
  
              <h3>What are you looking for?</h3>
              <button onClick={handleEmployeerQuizClick} className="intro__button">
                Jobs for Creatives
              </button>
              <button onClick={handleCreativeQuizClick} className="intro__button">
                Creatives to fulfill a Job
              </button>
            </div>
          )}
          {quizCompleted ? (
            <SubmitPage
              selectedAnswers={selectedAnswers}
              open={open}
              handleClose={handleClose}
              quizData={currentQuiz}
            />
          ) : (
            currentQuiz.length > 0 && (
              <QuestionPage
                quizData={currentQuiz}
                currentQuestion={currentQuestion}
                handleNextQuestion={handleNextQuestion}
                progressBarStyle={progressBarStyle}
                handlePreviousQuestion={handlePreviousQuestion}
                handleClose={handleClose}
              />
            )
          )}
        </Box>
      </Modal>
    </ThemeProvider>
  );
  
}

export default Quiz;
