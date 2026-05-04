import { Box, CircularProgress, Grid, LinearProgress, Typography } from "@mui/material";
import MovieCard from "../MovieCard";
import { type Movie } from "../moviesData";
import { useMoviesStore } from "./moviesStore";

interface MoviesListSectionProps {
  movies: Movie[];
  isListLoading: boolean;
  listError?: string;
}

function MoviesListSection({
  movies,
  isListLoading,
  listError,
}: MoviesListSectionProps) {
  const openEditModal = useMoviesStore((state) => state.openEditModal);

  const loadingWithoutData = isListLoading && movies.length === 0;
  const loadingWithData = isListLoading && movies.length > 0;
  const noData = !isListLoading && movies.length === 0 && !listError;
  const hasMovies = movies.length > 0;
  const hasError = !!listError;

  return (
    <>
      {loadingWithData && <LinearProgress sx={{ mb: 2 }} />}
      <Grid container spacing={2} sx={{ justifyContent: "center" }}>
        {loadingWithoutData && <CircularProgress />}
        {noData && (
          <Box sx={{ py: 8, textAlign: "center" }}>
            <Typography variant="h6">No movies yet</Typography>
            <Typography color="text.secondary">
              Add your first movie to start building the list.
            </Typography>
          </Box>
        )}
        {hasError && (
          <Box sx={{ py: 8, textAlign: "center" }}>
            <Typography variant="h6" color="error">
              Error loading movies
            </Typography>
            <Typography color="text.secondary">{listError}</Typography>
          </Box>
        )}
        {hasMovies &&
          movies.map((movie) => (
            <Grid size={{ xs: 8, md: 4 }} key={movie.id}>
              <MovieCard movie={movie} triggerMovieEdit={() => openEditModal(movie.id)} />
            </Grid>
          ))}
      </Grid>
    </>
  );
}

export default MoviesListSection;