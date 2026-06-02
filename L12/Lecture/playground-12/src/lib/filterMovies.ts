import type { Movie, WatchedFilter } from "./movie.types";

export function filterMovies(
  movies: Movie[],
  watchedFilter: WatchedFilter,
): Movie[] {
  if (watchedFilter === "watched") {
    return movies.filter((movie) => movie.watched);
  }

  if (watchedFilter === "not-watched") {
    return movies.filter((movie) => !movie.watched);
  }

  return movies;
}
