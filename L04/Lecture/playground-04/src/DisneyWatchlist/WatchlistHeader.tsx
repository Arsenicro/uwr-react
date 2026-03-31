import './DisneyWatchlist.css';
import { useMovieList } from './useMovieList';

const WatchlistHeader = () => {
  const movies = useMovieList((state) => state.movies);
  const totalMovies = movies.length;
  const completedMovies = movies.filter((m) => m.isCompleted).length;

  return (
    <div className="watchlist-header-stats">
      <p>Total Movies: {totalMovies}</p>
      <p>Completed: {completedMovies}</p>
    </div>
  );
};

export default WatchlistHeader;
