import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import EndPage from "../QuestionEndPage/QuestionEndPage"
import QuestionPage from "../QuestionPage/QuestionPage"
import "./Quiz.scss";

// // ------ import api base URL -------
import apiData from "../../data/apiData";

import { theme, boxStyle } from "../../theme/theme";
import { ThemeProvider } from "@mui/material";

// function CreativeModal({ open, handleClose }) {
//   const [currentQuestion, setCurrentQuestion] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [selectedAnswers, setSelectedAnswers] = useState([]);
//   const [endPage, setEndPage] = useState(false);
//   const [quizData, setquizData] = useState([]);

//   // -----  useEffect/ apiData -----
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await apiData.get("/quiz");
//         const quizResponse = response.data;
//         setquizData(quizResponse);
//         setCurrentQuestion(1);
//         setLoading(false);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchData();
//   }, []);

//   if (loading) {
//     return null;
//   }

//   const totalQuestions = quizData.length;
//   const progress = Math.round((currentQuestion / totalQuestions) * 100);
//   const progressBarStyle = {
//     width: `${progress}%`,
//   };

//   const handleEndPage = () => {
//     setCurrentQuestion(totalQuestions);
//     setEndPage(true);
//   };

// const handleNextQuestion = (selectedAnswer) => {
//   setSelectedAnswers([...selectedAnswers, selectedAnswer]);
//   if (currentQuestion > totalQuestions) {
//       return handleEndPage();
//   } else {
//     setCurrentQuestion(currentQuestion + 1);
//   }
// };

//   const handlePreviousQuestion = (event) => {
//     if (currentQuestion === 1) {
//       return handleClose();
//     } else {
//       setCurrentQuestion(currentQuestion - 1);
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await apiData.post("/answers", {
//         answers: selectedAnswers,
//       });
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//     handleClose();
//     return false;
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Modal open={open}>
//         {currentQuestion >= totalQuestions ? (
//           <div>
//             <h3>End Page</h3>
//             <button onClick={handleSubmit}>Submit</button>
//           </div>
//         ) : (
//           <Box sx={{ ...boxStyle }}>
//             {quizData[currentQuestion - 1] && (
//               <div className="modal">
//                 <div className="modal__top-bar">
//                 <div className="modal__close-icon" onClick={handleClose}>
//                   <img src={close} alt="close icon" />
//                 </div>
//                 <div className="modal__progress-wrapper">
//                   <div className="modal__progress-container">
//                     <div className="modal__progress--default"></div>
//                     <div
//                       className="modal__progress--active"
//                       style={progressBarStyle}
//                     ></div>
//                   </div>
//                   <button
//                     className="modal__progress--back"
//                     onClick={handlePreviousQuestion}
//                   >
//                     <img src={arrow} alt="back arrow" className="arrow-icon" />
//                     Back
//                   </button>
//                 </div>
//               </div>
//               <div className="modal__answers-wrapper">
//                 <h3>{quizData[currentQuestion - 1].question}</h3>
//                 <div className="modal__answers">
//                 <button
//   className="modal__answer"
//   onClick={() => handleNextQuestion(quizData[currentQuestion - 1].answers[0])}
// >
//   {quizData[currentQuestion - 1].answers[0]}
// </button>
// <button
//   className="modal__answer"
//   onClick={() => handleNextQuestion(quizData[currentQuestion - 1].answers[1])}
// >
//   {quizData[currentQuestion - 1].answers[0]}
// </button>
//                 </div>
//                 <div className="modal__answers">
//                 <button
//   className="modal__answer"
//   onClick={() => handleNextQuestion(quizData[currentQuestion - 1].answers[2])}
// >
//   {quizData[currentQuestion - 1].answers[0]}
// </button>
// <button
//   className="modal__answer"
//   onClick={() => handleNextQuestion(quizData[currentQuestion - 1].answers[3])}
// >
//   {quizData[currentQuestion - 1].answers[0]}
// </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </Box>
//         )}
//       </Modal>
//     </ThemeProvider>
//   )

// }

// export default CreativeModal;

const Quiz = ({open, handleClose}) => {
    const [quizData, setquizData] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quizCompleted, setQuizCompleted] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await apiData.get("/quiz");
          const quizResponse = response.data;
          setquizData(quizResponse);
          setCurrentQuestion(1);
          setLoading(false);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }, []);
  
    const handleAnswer = (answer) => {
      // handle answer logic here
  
      if (currentQuestion === quizData.answers.length) {
        setQuizCompleted(true);
      } else {
        setCurrentQuestion(currentQuestion + 1);
      }
    };
  
    if (loading) {
      return null;
    }
  
    const totalQuestions = quizData.answers.length;
    const progress = Math.round((currentQuestion / totalQuestions) * 100);
    const progressBarStyle = {
      width: `${progress}%`,
    };
  
    return (
      <div>
    <ThemeProvider theme={theme}>
        <Modal>
        <Box sx={{ ...boxStyle }}>
          {quizCompleted ? (
            <EndPage />
          ) : (
            <QuestionPage
              question={quizData.answers[currentQuestion - 1].question}
              progressBarStyle={progressBarStyle}
              choices={quizData.answers[currentQuestion - 1].choices}
              handleAnswer={handleAnswer}
            />
          )}
          </Box>
        </Modal>
    </ThemeProvider>
      </div>
    );
  };
  
export default Quiz;