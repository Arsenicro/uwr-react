import { Autocomplete, Box, Button, Container, createTheme, CssBaseline, Grid, Modal, TextField, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { moviesData } from "../moviesData";
import MovieCard from "./MovieCard";

declare module '@mui/material/styles' {
  interface Theme {
    customColor: string
  }
  // allow configuration using `createTheme()`
  interface ThemeOptions {
    customColor: string
  }
}

const darkTheme = createTheme({
  customColor: '#ff4081',
  palette: {
    mode: 'dark',
    primary: {
      main: '#3ecea3',
    },
    secondary: {
      main: '#4a3dd4',
    },
    background: {
      default: '#4d2b77',
      paper: '#300c4c',
    },
  },
});

const lightTheme = createTheme({
  customColor: '#ff4',
  palette: {
    mode: 'light',
  },
});

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <CssBaseline />
    <Button variant="contained" color="primary" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle Theme</Button>
    <Container>
      <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
        {moviesData.map((movie) => (
          <Grid size={{ xs: 8, md: 4 }} key={movie.title}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>

      <Modal
        open={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}>
          <Autocomplete
            multiple
            id="tags-outlined"
            options={["option1", "option2", "option3", "option4", "option5"]}
            getOptionLabel={(option) => option}
            defaultValue={["option4"]}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                label="filterSelectedOptions"
                placeholder="Favorites"
              />
            )}
          />
        </Box>
      </Modal>

    </Container>
  </ThemeProvider>;
}

export default App;