import type { Movie } from "./movie.types";

export function validateMovieInput(
  movies: Movie[],
  input: { title: string; description: string },
): string | null {
  const title = input.title.trim();
  const description = input.description.trim();

  if (!title) {
    return "Title is required.";
  }

  if (!description) {
    return "Description is required.";
  }

  const isDuplicate = movies.some(
    (movie) => movie.title.toLowerCase() === title.toLowerCase(),
  );

  if (isDuplicate) {
    return "A movie with this title already exists.";
  }

  return null;
}
