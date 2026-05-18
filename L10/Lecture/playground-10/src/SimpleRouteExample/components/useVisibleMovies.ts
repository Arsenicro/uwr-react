import { useMemo } from "react";
import type { Category, Movie } from "../../types";
import type {
  MovieCategoryFilter,
  MovieSortBy,
  MovieWatchedFilter,
} from "./MovieListFilters";

type UseVisibleMoviesArgs = {
  movies: Movie[];
  query: string;
  categoryFilter: MovieCategoryFilter;
  watchedFilter: MovieWatchedFilter;
  sortBy: MovieSortBy;
};

export function useVisibleMovies({
  movies,
  query,
  categoryFilter,
  watchedFilter,
  sortBy,
}: UseVisibleMoviesArgs): Movie[] {
  return useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const filteredMovies = movies.filter((movie) => {
      const matchesQuery =
        normalizedQuery.length === 0 ||
        movie.title.toLowerCase().includes(normalizedQuery) ||
        movie.director.toLowerCase().includes(normalizedQuery);

      const matchesCategory =
        categoryFilter === "all" || movie.categoryIds.includes(categoryFilter);

      const matchesWatched =
        watchedFilter === "all" ||
        (watchedFilter === "watched" && movie.watched) ||
        (watchedFilter === "not-watched" && !movie.watched);

      return matchesQuery && matchesCategory && matchesWatched;
    });

    const sortedMovies = filteredMovies.toSorted((left, right) => {
      switch (sortBy) {
        case "title-desc":
          return right.title.localeCompare(left.title);
        case "year-desc":
          return right.year - left.year;
        case "year-asc":
          return left.year - right.year;
        case "rating-desc":
          return right.rating - left.rating;
        case "rating-asc":
          return left.rating - right.rating;
        case "title-asc":
        default:
          return left.title.localeCompare(right.title);
      }
    });

    return sortedMovies;
  }, [movies, query, categoryFilter, watchedFilter, sortBy]);
}

export function resolveCategoryNames(
  movie: Movie,
  categories: Category[],
): string[] {
  return movie.categoryIds
    .map(
      (categoryId) =>
        categories.find((category) => category.id === categoryId)?.name,
    )
    .filter((name): name is string => Boolean(name));
}
