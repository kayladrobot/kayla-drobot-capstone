import * as React from "react";
// import { useState, useEffect } from "react";
import { theme, endStyle } from "../../theme/theme";
import { ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import closeicon from "../../assets/icons/close-24px.svg";
import arrow from "../../assets/icons/arrow_back-24px.svg";
import "./QuestionSubmit.scss";

const SubmitPage = ({ open, handleSubmit, handleClose, close }) => {
  return (
    <ThemeProvider theme={theme}>
      <Modal open={open}>
        <Box sx={endStyle}>
          <div className="submit">
            <div className="submit__close-icon" onClick={handleClose}>
              <img src={closeicon} alt="close icon" />
            </div>
            <form className="submit__wrapper">
              <div className="submit__copy-container">
                <h2>💘💘💘</h2>
                <h2>Matching in Progress!</h2>
                <p>
                  Thank you for completing the questionnaire. Our algorithm is
                  now analyzing your responses to find potential candidates that
                  match your criteria.
                </p>
              </div>
              <div className="submit__button-wrapper">
                <button onClick={handleSubmit} className="submit__button">
                  View Matches
                </button>
                <button onClick={close} className="submit__button--close">
                  Back to Homepage
                </button>
              </div>
            </form>
          </div>
        </Box>
      </Modal>
    </ThemeProvider>
  );
};

export default SubmitPage;
