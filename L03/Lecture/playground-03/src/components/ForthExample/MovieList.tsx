import React from 'react';
import './DisneyWatchlist.css';
import MovieItem from './MovieItem';
import type { Movie } from './types';

interface MovieListProps {
  movies: Movie[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, updatedTitle: string, updatedDescription: string) => void;
}

const MovieList: React.FC<MovieListProps> = ({ movies, onToggle, onDelete, onUpdate }) => {
  return (
    <div className="movie-list">
      {movies.length === 0 ? (
        <p>No movies in the watchlist. Add one above!</p>
      ) : (
        movies.map((movie) => (
          <MovieItem
            key={movie.id}
            movie={movie}
            onToggle={onToggle}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))
      )}
    </div>
  );
};

export default MovieList;
