import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import "./CreativeModal.scss";
import {
  theme,
  boxStyle,
  buttonContainer,
  flexStyle,
} from "../../theme/theme";
import { ThemeProvider } from "@mui/material";
import Close from "../../assets/icons/close-24px.svg";

function CreativeModal({open, handleClose}) {
  return (
    <ThemeProvider theme={theme}>
      <div className="modal">
        <Modal open={open}>
          <Box sx={{ ...boxStyle }}>
            <Box onClick={handleClose} sx={flexStyle}>
              <img src={Close} alt="close icon" className="modal__close-icon" />
            </Box>
            <div className="modal__container">
              <p className="modal__paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit beatae libero voluptatum? Saepe quo voluptates, assumenda blanditiis delectus obcaecati, sunt, non tempore voluptatum expedita dolores adipisci eius voluptatem earum officia?
              </p>
            </div>
            <Box sx={buttonContainer}>
              <Button
                sx={Close}
                variant="outlined"
                onClick={handleClose}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Modal>
      </div>
    </ThemeProvider>
  );
};

export default CreativeModal;
