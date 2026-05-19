import { useState } from "react";
import { starterCategories, starterMovies } from "../data";
import type { Category, Movie, MovieInput, Role } from "../types";

export function useMovieCatalogState() {
  const [categories, setCategories] = useState<Category[]>(starterCategories);
  const [movies, setMovies] = useState<Movie[]>(starterMovies);
  const [role, setRole] = useState<Role>("guest");

  const addMovie = (movie: MovieInput) => {
    const id = crypto.randomUUID();
    setMovies((prev) => [...prev, { ...movie, id, watched: false }]);
  };

  const updateMovie = (movieId: string, movie: MovieInput) => {
    setMovies((prev) =>
      prev.map((item) =>
        item.id === movieId
          ? { ...movie, id: movieId, watched: item.watched }
          : item,
      ),
    );
  };

  const toggleMovieWatched = (movieId: string) => {
    setMovies((prev) =>
      prev.map((item) =>
        item.id === movieId ? { ...item, watched: !item.watched } : item,
      ),
    );
  };

  const addCategory = (name: string) => {
    const id = crypto.randomUUID();
    setCategories((prev) => [...prev, { id, name }]);
  };

  const toggleRole = () => {
    setRole((prev) => {
      const nextRole = prev === "admin" ? "guest" : "admin";

      return nextRole;
    });
  };

  return {
    categories,
    movies,
    role,
    addMovie,
    updateMovie,
    toggleMovieWatched,
    addCategory,
    toggleRole,
  };
}
