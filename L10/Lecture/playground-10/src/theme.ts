import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#4dd0e1" },
    secondary: { main: "#ffb74d" },
    background: { default: "#0b1020", paper: "#121a2f" },
  },
  shape: { borderRadius: 10 },
});
