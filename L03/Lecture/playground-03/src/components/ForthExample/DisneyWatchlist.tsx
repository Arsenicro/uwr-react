import React, { useState } from 'react';
import './DisneyWatchlist.css';
import MovieForm from './MovieForm';
import MovieList from './MovieList';
import type { Movie } from './types';
import WatchlistHeader from './WatchlistHeader';

const DisneyWatchlist: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([
    {
      id: '1',
      title: 'The Lion King',
      description: 'Simba idolises his father, King Mufasa, and takes to heart his own royal destiny.',
      isCompleted: true,
    },
    {
      id: '2',
      title: 'Frozen',
      description: 'When the newly-crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.',
      isCompleted: false,
    },
    {
      id: '3',
      title: 'Moana',
      description: 'In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana\'s island, she answers the Ocean\'s call to seek out the Demigod to set things right.',
      isCompleted: false,
    }
  ]);

  const handleAddMovie = (title: string, description: string) => {
    const newMovie: Movie = {
      id: crypto.randomUUID(), // Quick and dirty way to generate a unique ID
      title,
      description,
      isCompleted: false,
    };
    setMovies([...movies, newMovie]);
  };

  const handleToggleMovie = (id: string) => {
    setMovies(
      movies.map((movie) =>
        movie.id === id ? { ...movie, isCompleted: !movie.isCompleted } : movie
      )
    );
  };

  const handleDeleteMovie = (id: string) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const handleUpdateMovie = (id: string, updatedTitle: string, updatedDescription: string) => {
    setMovies(
      movies.map((movie) =>
        movie.id === id
          ? { ...movie, title: updatedTitle, description: updatedDescription }
          : movie
      )
    );
  };

  return (
    <div className="disney-watchlist">
      <h1>My Disney Watchlist</h1>
      <WatchlistHeader movies={movies} />
      <MovieForm onAddMovie={handleAddMovie} />
      <MovieList
        movies={movies}
        onToggle={handleToggleMovie}
        onDelete={handleDeleteMovie}
        onUpdate={handleUpdateMovie}
      />
    </div>
  );
};

export default DisneyWatchlist;
