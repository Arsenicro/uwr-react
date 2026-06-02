import {
  createContext,
  useContext,
  useReducer,
  useState,
  type ReactNode,
} from "react";
import { filterMovies } from "../lib/filterMovies";
import { movieReducer } from "../lib/movieReducer";
import type { Movie, WatchedFilter } from "../lib/movie.types";
import { validateMovieInput } from "../lib/validateMovie";

interface MovieContextValue {
  movies: Movie[];
  visibleMovies: Movie[];
  watchedFilter: WatchedFilter;
  setWatchedFilter: (filter: WatchedFilter) => void;
  addMovie: (
    title: string,
    description: string,
    watched: boolean,
  ) => string | null;
  toggleWatched: (id: string) => void;
  deleteMovie: (id: string) => void;
}

const MovieContext = createContext<MovieContextValue | undefined>(undefined);

interface MovieProviderProps {
  initialMovies: Movie[];
  children: ReactNode;
}

export function MovieProvider({
  initialMovies,
  children,
}: MovieProviderProps) {
  const [movies, dispatch] = useReducer(movieReducer, initialMovies);
  const [watchedFilter, setWatchedFilter] = useState<WatchedFilter>("all");
  const visibleMovies = filterMovies(movies, watchedFilter);

  const value: MovieContextValue = {
    movies,
    visibleMovies,
    watchedFilter,
    setWatchedFilter,
    addMovie: (title: string, description: string, watched: boolean) => {
      const error = validateMovieInput(movies, { title, description });
      if (error) {
        return error;
      }

      dispatch({
        type: "ADD_MOVIE",
        payload: {
          title: title.trim(),
          description: description.trim(),
          watched,
        },
      });
      return null;
    },
    toggleWatched: (id: string) => {
      dispatch({ type: "TOGGLE_WATCHED", payload: { id } });
    },
    deleteMovie: (id: string) => {
      dispatch({ type: "DELETE_MOVIE", payload: { id } });
    },
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
}

export function useMovies() {
  const context = useContext(MovieContext);

  if (!context) {
    throw new Error("useMovies must be used within a MovieProvider");
  }

  return context;
}
