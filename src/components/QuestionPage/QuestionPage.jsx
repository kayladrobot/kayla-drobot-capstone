import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import close from "../../assets/icons/close-24px.svg";
import arrow from "../../assets/icons/arrow_back-24px.svg";
import { theme, boxStyle } from "../../theme/theme";
import { ThemeProvider } from "@mui/material";
import "./QuestionPage.scss"



const QuestionPage = ({
  open,
  progressBarStyle,
  currentQuestion,
  quizData,
  handleClose,
  handlePreviousQuestion,
  handleNextQuestion,
  handleAnswer,
  choices,
  question,
  totalQuestions, 
  handleSubmit
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Modal open={open}>
          <Box sx={{ ...boxStyle }}>
            {quizData[currentQuestion - 1] && (
              <div className="modal">
                <div className="modal__top-bar">
                  <div className="modal__close-icon" onClick={handleClose}>
                    <img src={close} alt="close icon" />
                  </div>
                  <div className="modal__progress-wrapper">
                    <div className="modal__progress-container">
                      <div className="modal__progress--default"></div>
                      <div
                        className="modal__progress--active"
                        style={progressBarStyle}
                      ></div>
                    </div>
                    <button
                      className="modal__progress--back"
                      onClick={handlePreviousQuestion}
                    >
                      <img
                        src={arrow}
                        alt="back arrow"
                        className="arrow-icon"
                      />
                      Back
                    </button>
                  </div>
                </div>
                <div className="modal__answers-wrapper">
                  <h3>{quizData[currentQuestion - 1].question}</h3>
                  <div className="modal__answers">
                    <button
                      className="modal__answer"
                      onClick={() =>
                        handleNextQuestion(
                          quizData[currentQuestion - 1].answers[0]
                        )
                      }
                    >
                      {quizData[currentQuestion - 1].answers[0]}
                    </button>
                    <button
                      className="modal__answer"
                      onClick={() =>
                        handleNextQuestion(
                          quizData[currentQuestion - 1].answers[1]
                        )
                      }
                    >
                      {quizData[currentQuestion - 1].answers[1]}
                    </button>
                  </div>
                  <div className="modal__answers">
                    <button
                      className="modal__answer"
                      onClick={() =>
                        handleNextQuestion(
                          quizData[currentQuestion - 1].answers[2]
                        )
                      }
                    >
                      {quizData[currentQuestion - 1].answers[2]}
                    </button>
                    <button
                      className="modal__answer"
                      onClick={() =>
                        handleNextQuestion(
                          quizData[currentQuestion - 1].answers[3]
                        )
                      }
                    >
                      {quizData[currentQuestion - 1].answers[3]}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Box>
      </Modal>
    </ThemeProvider>
  );
};

export default QuestionPage;
