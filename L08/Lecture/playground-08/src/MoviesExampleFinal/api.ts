import type { Movie } from "../moviesData";

const API_URL = "http://localhost:3000/";
const MOVIES_ENDPOINT = `${API_URL}movies`;

export async function getMovies() {
  const result = await fetch(MOVIES_ENDPOINT);
  const data = await result.json();
  return data as Movie[];
}

export async function addMovie(movie: Omit<Movie, "id">) {
  const result = await fetch(MOVIES_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movie),
  });
  if (!result.ok) {
    throw new Error("Failed to add movie");
  }
  const data = await result.json();
  return data as Movie;
}

export async function editMovie(id: string, movie: Omit<Movie, "id">) {
  const result = await fetch(`${MOVIES_ENDPOINT}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movie),
  });
  if (!result.ok) {
    throw new Error("Failed to edit movie");
  }
  const data = await result.json();
  return data as Movie;
}
