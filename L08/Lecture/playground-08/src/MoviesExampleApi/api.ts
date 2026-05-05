import type { Category } from "../moviesData";

export async function fetchMovies(search?: string) {
  const response = await fetch(
    "http://localhost:3000/movies?" +
      new URLSearchParams(search ? { search } : {}),
  );
  const data = await response.json();

  if (!response.ok) throw new Error("Failed to fetch movies");
  return data;
}

export async function addMovie(
  title: string,
  description: string,
  categories: Category[],
) {
  const response = await fetch("http://localhost:3000/movies", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, description, categories }),
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.error || "Failed to add movie");
  return data;
}

export async function editMovie(
  id: string,
  title: string,
  description: string,
  categories: Category[],
) {
  const response = await fetch(`http://localhost:3000/movies/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, description, categories }),
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.error || "Failed to edit movie");
  return data;
}
