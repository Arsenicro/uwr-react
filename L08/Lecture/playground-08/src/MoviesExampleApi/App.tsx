import { Box, Button, Container, Grid, LinearProgress, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import MovieCard from "../MovieCard";
import { type Category, type Movie } from "../moviesData";
import MovieModal from "./MovieModal";
import { addMovie, editMovie, fetchMovies } from "./api";

function MovieApp() {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalId, setEditModalId] = useState<string | null>(null);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  async function refetchMovies() {
    setLoading(true);
    const movies = await fetchMovies(search);
    setMovies(movies);
    setLoading(false);
  }

  async function handleAddMovie(title: string, description: string, categories: Category[]) {
    try {
      setError(undefined);
      setLoading(true);
      const newMovie = await addMovie(title, description, categories);
      //setMovies([...movies, newMovie]); // (Prawie) Optymistyczna aktualizacja UI
      await refetchMovies();
      setAddModalOpen(false);
    } catch (error) {
      if (error instanceof Error) setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleEditMovie(title: string, description: string, categories: Category[]) {
    try {
      setError(undefined);
      if (!editModalId) return;
      setLoading(true);
      await editMovie(editModalId, title, description, categories);
      await refetchMovies();
      setEditModalId(null);
    } catch (error) {
      if (error instanceof Error) setError(error.message);
    } finally {
      setLoading(false);
    }

  }

  /*   const loadMovies = useCallback(async () => {
      const movies = await fetchMovies(search);
      setMovies(movies);
    }, [search]);
  
    useEffect(() => {
      // Nie do końca poprawne
      loadMovies();
    }, [loadMovies]) */

  useEffect(() => {
    let ignore = false;


    async function loadMovies() {
      setLoading(true);
      const movies = await fetchMovies(search);
      if (!ignore) {
        setMovies(movies);
        setLoading(false);
      }
    }

    loadMovies();

    return () => {
      ignore = true;
    }
  }, [search])


  return (
    <Container>
      <Button variant="contained" color="primary" onClick={() => setAddModalOpen(true)} sx={{ mb: 2 }}>Add Movie</Button>
      <TextField
        fullWidth
        label="Search Movies"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 2 }}
      />


      {loading && <LinearProgress />}

      <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
        {movies.map((movie) => (
          <Grid size={{ xs: 8, md: 4 }} key={movie.id}>
            <MovieCard movie={movie} triggerMovieEdit={() => {
              setEditModalId(movie.id);
            }} />
          </Grid>
        ))}
      </Grid>

      {movies.length === 0 && !loading && <Box sx={{ mt: 4, textAlign: 'center' }}>No movies found.</Box>}

      <MovieModal open={addModalOpen} onClose={() => {
        setAddModalOpen(false)
        setError(undefined);
      }} onSave={handleAddMovie} saveText="Add Movie" apiLoading={loading} apiError={error} />
      <MovieModal
        key={editModalId || "new"}
        open={!!editModalId}
        onClose={() => {
          setEditModalId(null);
          setError(undefined);
        }}
        onSave={handleEditMovie}
        saveText="Edit Movie"
        initialData={editModalId ? movies.find((m) => m.id === editModalId) : undefined}
        apiLoading={loading}
        apiError={error}
      />

    </Container>
  );
}

export default MovieApp;