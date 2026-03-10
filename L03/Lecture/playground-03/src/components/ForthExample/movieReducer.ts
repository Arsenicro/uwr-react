import type { Movie, MovieAction } from "./types";

export const movieReducer = (state: Movie[], action: MovieAction) => {
  switch (action.type) {
    case "ADD_MOVIE": {
      const newMovie: Movie = {
        id: crypto.randomUUID(),
        title: action.payload.title,
        description: action.payload.description,
        isCompleted: action.payload.isCompleted,
      };
      return [...state, newMovie];
    }
    case "TOGGLE_MOVIE":
      return state.map((movie) =>
        movie.id === action.payload.id
          ? { ...movie, isCompleted: !movie.isCompleted }
          : movie,
      );
    case "DELETE_MOVIE":
      return state.filter((movie) => movie.id !== action.payload.id);
    case "UPDATE_MOVIE":
      return state.map((movie) =>
        movie.id === action.payload.id
          ? {
              ...movie,
              title: action.payload.title,
              description: action.payload.description,
            }
          : movie,
      );
    default:
      return state;
  }
};
