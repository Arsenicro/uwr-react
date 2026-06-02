import { useMovies } from "../context/MovieContext";
import MovieItem from "./MovieItem";

export default function MovieList() {
  const { visibleMovies, toggleWatched, deleteMovie } = useMovies();

  if (visibleMovies.length === 0) {
    return (
      <p role="status" className="rounded-lg bg-slate-200/80 px-4 py-8 text-center text-slate-600 dark:bg-slate-800/80 dark:text-slate-400">
        No movies found.
      </p>
    );
  }

  return (
    <ul aria-label="Movie list" className="space-y-4">
      {visibleMovies.map((movie) => (
        <MovieItem
          key={movie.id}
          movie={movie}
          onToggleWatched={() => toggleWatched(movie.id)}
          onDelete={() => deleteMovie(movie.id)}
        />
      ))}
    </ul>
  );
}
