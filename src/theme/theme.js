import { createTheme } from "@mui/material";

export const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 768,
      laptop: 1024,
      desktop: 1200,
    },
  },
});

export const boxStyle = {
  position: "absolute",
  top: { mobile: "50%", tablet: "50%" },
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  px: { mobile: 2, tablet: 2 },
  pl: { tablet: 8 },
  py: { mobile: 3, tablet: 2 },
  width: { mobile: "100%", tablet: "90%" },
  height: { mobile: "100%", tablet: "75%" },
  borderRadius: { tablet: 1 },
};

export const flexStyle = {
  display: "flex",
  justifyContent: "flex-end",
  cursor: "pointer",
};

export const buttonContainer = {
  display: "flex",
  flexDirection: "row",
  justifyContent: { mobile: "space-between", tablet: "flex-end" },
  columnGap: { mobile: 1, tablet: 2 },
};

export const cancelButton = {
  borderRadius: 20,
  backgroundColor: "#FFFFFF",
  color: "#5C667E",
  fontStyle: "normal",
  textTransform: "none",
  fontWeight: 600,
  fontSize: 13,
  lineHeight: 20,
  width: { mobile: "100%", tablet: 72 },
  height: { mobile: 36, tablet: 38 },
  boxShadow: "unset",
  border: "1px solid #BDC5D5",
  "&:hover": {
    border: "1px solid #2E66E6",
    backgroundColor: "#FFFFFF",
    color: "#2E66E6",
  },
};

export const deleteButton = {
  borderRadius: 20,
  backgroundColor: "#C94515",
  width: { mobile: "100%", tablet: 72 },
  height: { mobile: 36, tablet: 38 },
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: 13,
  textTransform: "none",
  boxShadow: "unset",
  "&:hover": {
    backgroundColor: "#232940",
  },
};
