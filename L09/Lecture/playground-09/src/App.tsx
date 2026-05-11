
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import Content from "./MoviesExampleApi/App";
import { darkTheme } from "./theme";


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Content />
    </ThemeProvider>
  );
}

export default App
