import { Container } from "@mui/material";
import { useEffect } from "react";
import AddMovieModal from "./AddMovieModal";
import EditMovieModal from "./EditMovieModal";
import MovieAppToolbar from "./MovieAppToolbar";
import MoviesListSection from "./MoviesListSection";
import { useMoviesStore } from "./moviesStore";


function MovieApp() {
  const movies = useMoviesStore((state) => state.movies);
  const listStatus = useMoviesStore((state) => state.listStatus);
  const listError = useMoviesStore((state) => state.listError);
  const fetchMovies = useMoviesStore((state) => state.fetchMovies);

  const isListLoading = listStatus === "loading";

  useEffect(() => {
    // That's fine, as there is no race condition
    // May need AbortController if we had filters or pagination, but we don't, so it's fine
    fetchMovies();
  }, [fetchMovies]);

  return (
    <Container>
      <MovieAppToolbar />

      <MoviesListSection
        movies={movies}
        isListLoading={isListLoading}
        listError={listError}
      />

      <AddMovieModal />
      <EditMovieModal />

    </Container>
  );
}

export default MovieApp;