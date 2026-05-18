import { useState } from "react";
import { starterCategories, starterMovies } from "../data";
import type { Category, Movie, MovieInput, Role } from "../types";
import type { Page } from "./components/PageContent";

export function useMovieCatalogState() {
  const [categories, setCategories] = useState<Category[]>(starterCategories);
  const [movies, setMovies] = useState<Movie[]>(starterMovies);
  const [role, setRole] = useState<Role>("guest");
  const [page, setPage] = useState<Page>("movies");
  const [editedMovieId, setEditedMovieId] = useState<string | null>(null);

  const editedMovie = movies.find((movie) => movie.id === editedMovieId);

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

  const openEditMovie = (movieId: string) => {
    if (role !== "admin") {
      return;
    }

    setEditedMovieId(movieId);
    setPage("edit-movie");
  };

  const openMovies = () => setPage("movies");
  const openAddMovie = () => setPage("add-movie");
  const openAdminCategories = () => setPage("admin-categories");
  const openAdminAddCategory = () => setPage("admin-add-category");

  const toggleRole = () => {
    setRole((prev) => {
      const nextRole = prev === "admin" ? "guest" : "admin";

      if (nextRole === "guest") {
        setEditedMovieId(null);
        setPage("movies");
      }

      return nextRole;
    });
  };

  return {
    categories,
    movies,
    role,
    page,
    editedMovie,
    addMovie,
    updateMovie,
    toggleMovieWatched,
    addCategory,
    openEditMovie,
    openMovies,
    openAddMovie,
    openAdminCategories,
    openAdminAddCategory,
    toggleRole,
  };
}
