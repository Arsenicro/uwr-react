import { createTheme } from "@mui/material";
import type { Category } from "./moviesData";

declare module "@mui/material/styles" {
  interface Theme {
    chipColors: Record<Category, string>;
  }
  // allow configuration using `createTheme()`
  interface ThemeOptions {
    chipColors: Record<Category, string>;
  }
}

export const darkTheme = createTheme({
  chipColors: {
    fantasy: "#d91e63",
    adventure: "#004d2d",
    family: "#512da8",
    musical: "#b81d7f",
    animation: "#1e88e5",
    drama: "#c62828",
    comedy: "#ff6f00",
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#3ecea3",
    },
    secondary: {
      main: "#4a3dd4",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0bec5",
    },
  },
});
