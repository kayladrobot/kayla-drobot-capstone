import * as React from "react";
// import { useState, useEffect } from "react";
import { theme, boxStyle } from "../../theme/theme";
import { ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";



const EndPage = ({open, handleSubmit}) => {
  return (
    <ThemeProvider theme={theme}>
    <Modal open={open}>
        <Box sx={{ ...boxStyle }}>
    <form>
      <h2>This is the end page!</h2>
      <button onClick={handleSubmit}>Submit</button>
    </form>
              </Box>
              </Modal>
            </ThemeProvider>
  );
};

export default EndPage;
