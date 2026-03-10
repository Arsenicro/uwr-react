import { useMovieContext } from './context/MovieContext';
import './DisneyWatchlist.css';

const WatchlistHeader = () => {
  const { movies } = useMovieContext();
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
