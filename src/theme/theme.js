import { createTheme } from "@mui/material/styles";
// customized theme

const theme = createTheme({
  palette: {
    primary: {
      main: "#22577E",
    },
    secondary: {
      main: "#5584AC",
    },
  },
  background: {
    default: "#f5f5f5",
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightRegular: 500,
  },
});
export default theme;
