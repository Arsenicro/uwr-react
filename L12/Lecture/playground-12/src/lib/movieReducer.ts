import { getRandomUUID } from "./getRandomUUID";
import type { Movie, MovieAction } from "./movie.types";

export function movieReducer(state: Movie[], action: MovieAction): Movie[] {
  switch (action.type) {
    case "ADD_MOVIE": {
      const newMovie: Movie = {
        id: getRandomUUID(),
        title: action.payload.title,
        description: action.payload.description,
        watched: action.payload.watched,
      };
      return [...state, newMovie];
    }
    case "TOGGLE_WATCHED":
      return state.map((movie) =>
        movie.id === action.payload.id
          ? { ...movie, watched: !movie.watched }
          : movie,
      );
    case "DELETE_MOVIE":
      return state.filter((movie) => movie.id !== action.payload.id);
    default:
      return state;
  }
}
