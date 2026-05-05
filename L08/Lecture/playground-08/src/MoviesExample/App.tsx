import { Button, Container, Grid } from "@mui/material";
import { useState } from "react";
import MovieCard from "../MovieCard";
import { moviesData, type Category } from "../moviesData";
import MovieModal from "./MovieModal";

function MovieApp() {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalId, setEditModalId] = useState<string | null>(null);
  const [movies, setMovies] = useState(moviesData);

  function handleAddMovie(title: string, description: string, categories: Category[]) {
    setMovies([...movies, { id: crypto.randomUUID(), title, description, categories }]);
    setAddModalOpen(false);
  }

  function handleEditMovie(title: string, description: string, categories: Category[]) {
    if (editModalId) setMovies(movies.map((m) => m.id === editModalId ? { ...m, title, description, categories } : m));
    setEditModalId(null);
  }

  return (
    <Container>
      <Button variant="contained" color="primary" onClick={() => setAddModalOpen(true)} sx={{ mb: 2 }}>Add Movie</Button>

      <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
        {movies.map((movie) => (
          <Grid size={{ xs: 8, md: 4 }} key={movie.id}>
            <MovieCard movie={movie} triggerMovieEdit={() => {
              setEditModalId(movie.id);
            }} />
          </Grid>
        ))}
      </Grid>

      <MovieModal open={addModalOpen} onClose={() => setAddModalOpen(false)} onSave={handleAddMovie} saveText="Add Movie" />
      <MovieModal
        key={editModalId || "new"}
        open={!!editModalId}
        onClose={() => setEditModalId(null)}
        onSave={handleEditMovie}
        saveText="Edit Movie"
        initialData={editModalId ? movies.find((m) => m.id === editModalId) : undefined}
      />

    </Container>
  );
}

export default MovieApp;