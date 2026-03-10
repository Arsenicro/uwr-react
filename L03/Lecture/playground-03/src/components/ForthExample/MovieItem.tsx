import React, { useState } from 'react';
import './DisneyWatchlist.css';
import type { Movie } from './types';

interface MovieItemProps {
  movie: Movie;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, updatedTitle: string, updatedDescription: string) => void;
}

const MovieItem: React.FC<MovieItemProps> = ({ movie, onToggle, onDelete, onUpdate }) => {

  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(movie.title);
  const [editDescription, setEditDescription] = useState(movie.description);

  const startEditing = () => {
    setEditTitle(movie.title);
    setEditDescription(movie.description);
    setIsEditing(true);
  };

  const handleUpdate = () => {
    onUpdate(movie.id, editTitle, editDescription);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditTitle(movie.title);
    setEditDescription(movie.description);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="movie-item editing">
        <input
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />
        <textarea
          value={editDescription}
          onChange={(e) => setEditDescription(e.target.value)}
        />
        <div className="movie-controls">
          <button onClick={handleUpdate}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    );
  }

  return (
    <div className={`movie-item ${movie.isCompleted ? 'completed' : ''}`}>
      <div className="movie-header">
        <h3 onClick={() => onToggle(movie.id)} style={{ cursor: 'pointer' }}>
          {movie.title}
        </h3>
        <input
          type="checkbox"
          checked={movie.isCompleted}
          onChange={() => onToggle(movie.id)}
        />
      </div>
      <p>{movie.description}</p>
      <div className="movie-controls">
        <button className="toggle" onClick={() => onToggle(movie.id)}>
          {movie.isCompleted ? 'Uncheck' : 'Check'}
        </button>
        <button onClick={startEditing}>Edit</button>
        <button className="delete" onClick={() => onDelete(movie.id)}>Delete</button>
      </div>
    </div>
  );
};

export default MovieItem;
