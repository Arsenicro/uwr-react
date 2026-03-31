import React, { useState } from 'react';
import './DisneyWatchlist.css';
import { useMovieList } from './useMovieList';

const MovieForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const addMovie = useMovieList((state) => state.addMovie);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    addMovie(title, description);
    setTitle('');
    setDescription('');
  };

  return (
    <form className="movie-form" onSubmit={handleSubmit}>
      <h3>Add a Disney Movie</h3>
      <input
        type="text"
        placeholder="Movie Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default MovieForm;
