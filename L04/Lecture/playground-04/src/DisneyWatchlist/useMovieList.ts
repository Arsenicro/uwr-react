import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Movie } from "./types";

interface MovieListState {
  movies: Movie[];
  addMovie: (title: string, description: string) => void;
  toggleMovie: (id: string) => void;
  deleteMovie: (id: string) => void;
  updateMovie: (
    id: string,
    updatedTitle: string,
    updatedDescription: string,
  ) => void;
}

export const useMovieList = create<MovieListState>()(
  persist(
    (set) => ({
      movies: [
        {
          id: crypto.randomUUID(),
          title: "The Lion King",
          description:
            "Simba idolises his father, King Mufasa, and takes to heart his own royal destiny.",
          isCompleted: true,
        },
        {
          id: crypto.randomUUID(),
          title: "Frozen",
          description:
            "When the newly-crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.",
          isCompleted: false,
        },
        {
          id: crypto.randomUUID(),
          title: "Moana",
          description:
            "In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana's island, she answers the Ocean's call to seek out the Demigod to set things right.",
          isCompleted: false,
        },
      ],
      addMovie: (title, description) =>
        set((state) => ({
          movies: [
            ...state.movies,
            {
              id: crypto.randomUUID(),
              title,
              description,
              isCompleted: false,
            },
          ],
        })),
      toggleMovie: (id) =>
        set((state) => ({
          movies: state.movies.map((movie) =>
            movie.id === id
              ? { ...movie, isCompleted: !movie.isCompleted }
              : movie,
          ),
        })),
      deleteMovie: (id) =>
        set((state) => ({
          movies: state.movies.filter((movie) => movie.id !== id),
        })),
      updateMovie: (id, updatedTitle, updatedDescription) =>
        set((state) => ({
          movies: state.movies.map((movie) =>
            movie.id === id
              ? {
                  ...movie,
                  title: updatedTitle,
                  description: updatedDescription,
                }
              : movie,
          ),
        })),
    }),
    {
      name: "disney-watchlist",
    },
  ),
);
