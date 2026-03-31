import './DisneyWatchlist.css';
import MovieItem from './MovieItem';
import { useMovieList } from './useMovieList';


const MovieList = () => {
  const { movies, toggleMovie, deleteMovie, updateMovie } = useMovieList();
  return (
    <div className="movie-list">
      {movies.length === 0 ? (
        <p>No movies in the watchlist. Add one above!</p>
      ) : (
        movies.map((movie) => (
          <MovieItem
            key={movie.id}
            movie={movie}
            onToggle={toggleMovie}
            onDelete={deleteMovie}
            onUpdate={updateMovie}
          />
        ))
      )}
    </div>
  );
};

export default MovieList;
