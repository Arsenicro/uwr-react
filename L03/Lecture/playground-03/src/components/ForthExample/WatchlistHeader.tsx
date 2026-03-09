import React from 'react';
import './DisneyWatchlist.css';
import type { Movie } from './types';

interface WatchlistHeaderProps {
  movies: Movie[];
}

const WatchlistHeader: React.FC<WatchlistHeaderProps> = ({ movies }) => {
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
