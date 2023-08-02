import { createTheme } from '@mui/material/styles';
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0C0E1A",
      contrastText: "#f9f9f9",
    },
    secondary: {
      main: "#b89f57",
      contrastText: "#f9f9f9",
    },
    boton: {
      main: "red",
      contrastText: "#f9f9f9",
    },
    white: {
      main: "#f2f2f2",
      contrastText: "#f2f2f2",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#2F2A47",
    },
  },
  typography: {
    
    h3: {
      fontWeight: 600,
    },
    h1:{
      fontSize: "4rem",
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    subtitle1: {
      fontWeight: 600,
    },
    body1: {
      fontSize: "18px",
    },
  },
});

export default theme;
