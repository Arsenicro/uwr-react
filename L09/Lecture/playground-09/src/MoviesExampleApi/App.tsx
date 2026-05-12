import { Box, Button, CircularProgress, Container, Grid, LinearProgress, TextField } from "@mui/material";
import { useState } from "react";
import MovieCard from "../MovieCard";
import AddMovieModal from "./AddMovieModal";
import EditMovieModal from "./EditMovieModal";
import useMoviesQuery from "./api/movies/useMoviesQuery";

function MovieApp() {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalId, setEditModalId] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  //const moviesQuery = useQuery<Movie[]>({ queryKey: ['movies', 'search'], queryFn: () => fetchMovies(search) });
  //const moviesQuery = useQuery<Movie[]>({ queryKey: [{'search', 'movies'}], queryFn: () => fetchMovies(search) });

  const moviesQuery = useMoviesQuery(search);

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


      {moviesQuery.isFetching && !moviesQuery.isPending && <LinearProgress />}
      {moviesQuery.isLoading && <Box sx={{ mt: 4, textAlign: 'center' }}><CircularProgress /></Box>}

      <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
        {moviesQuery.data?.map((movie) => (
          <Grid size={{ xs: 8, md: 4 }} key={movie.id}>
            <MovieCard movie={movie} triggerMovieEdit={() => {
              setEditModalId(movie.id);
            }} />
          </Grid>
        ))}
      </Grid>

      {moviesQuery.data?.length === 0 && !moviesQuery.isFetching && <Box sx={{ mt: 4, textAlign: 'center' }}>No movies found.</Box>}

      <AddMovieModal
        open={addModalOpen}
        onClose={() => {
          setAddModalOpen(false)
        }}
      />
      <EditMovieModal
        key={editModalId || "new"}
        id={editModalId || undefined}
        open={!!editModalId}
        onClose={() => {
          setEditModalId(null);
        }}
      />

    </Container>
  );
}

export default MovieApp;