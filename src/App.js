import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import Calendar123 from "./Calendar";


function App() {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
    <Calendar123 />
  </ThemeProvider>
  );
}

export default App;
