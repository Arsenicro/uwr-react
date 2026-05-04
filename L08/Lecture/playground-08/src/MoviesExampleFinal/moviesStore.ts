import { create } from "zustand";
import { type Category, type Movie } from "../moviesData";
import { addMovie, editMovie, getMovies } from "./api";

type AsyncStatus = "idle" | "loading" | "success" | "error";

interface MoviesStore {
  movies: Movie[];
  addModalOpen: boolean;
  editModalId: string | null;
  listStatus: AsyncStatus;
  listError?: string;
  createStatus: AsyncStatus;
  createError?: string;
  editStatus: AsyncStatus;
  editError?: string;
  openAddModal: () => void;
  closeAddModal: () => void;
  openEditModal: (id: string) => void;
  closeEditModal: () => void;
  fetchMovies: () => Promise<void>;
  createMovie: (
    title: string,
    description: string,
    categories: Category[],
  ) => Promise<boolean>;
  updateMovie: (
    id: string,
    title: string,
    description: string,
    categories: Category[],
  ) => Promise<boolean>;
  clearCreateState: () => void;
  clearEditState: () => void;
  clearListError: () => void;
}

export const useMoviesStore = create<MoviesStore>((set, get) => ({
  movies: [],
  addModalOpen: false,
  editModalId: null,
  listStatus: "idle",
  listError: undefined,
  createStatus: "idle",
  createError: undefined,
  editStatus: "idle",
  editError: undefined,

  openAddModal: () => {
    set({ addModalOpen: true, createStatus: "idle", createError: undefined });
  },

  closeAddModal: () => {
    set({ addModalOpen: false, createStatus: "idle", createError: undefined });
  },

  openEditModal: (id) => {
    set({ editModalId: id, editStatus: "idle", editError: undefined });
  },

  closeEditModal: () => {
    set({ editModalId: null, editStatus: "idle", editError: undefined });
  },

  fetchMovies: async () => {
    set({
      listStatus: "loading",
      listError: undefined,
    });

    try {
      const moviesFromServer = await getMovies();

      set({
        movies: moviesFromServer,
        listStatus: "success",
      });
    } catch (error) {
      set({
        listStatus: "error",
        listError: (error as Error).message || "Failed to load movies",
      });
    }
  },

  createMovie: async (title, description, categories) => {
    set({ createStatus: "loading", createError: undefined });

    try {
      await addMovie({ title, description, categories });
      await get().fetchMovies();
      set({ createStatus: "success", addModalOpen: false });
      return true;
    } catch (error) {
      set({
        createStatus: "error",
        createError: (error as Error).message || "Failed to add movie",
      });
      return false;
    }
  },

  updateMovie: async (id, title, description, categories) => {
    set({ editStatus: "loading", editError: undefined });

    try {
      await editMovie(id, { title, description, categories });
      await get().fetchMovies();
      set({ editStatus: "success", editModalId: null });
      return true;
    } catch (error) {
      set({
        editStatus: "error",
        editError: (error as Error).message || "Failed to edit movie",
      });
      return false;
    }
  },

  clearCreateState: () => {
    set({ createStatus: "idle", createError: undefined });
  },

  clearEditState: () => {
    set({ editStatus: "idle", editError: undefined });
  },

  clearListError: () => {
    set({ listError: undefined });
  },
}));
