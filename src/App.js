import React from "react";
import Router from "./shared/Router";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.theme);

  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
