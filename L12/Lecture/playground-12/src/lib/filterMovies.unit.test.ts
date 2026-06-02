import { beforeEach, expect, test } from "vitest";
import { filterMovies } from "./filterMovies";
import type { Movie } from "./movie.types";

let movies: Movie[] = [];

beforeEach(() => {
  movies = [
    {
      id: "1",
      title: "Movie 1",
      description: "Description 1",
      watched: true,
    },
    {
      id: "2",
      title: "Movie 2",
      description: "Description 2",
      watched: false,
    },
    {
      id: "3",
      title: "Movie 3",
      description: "Description 3",
      watched: true,
    },
  ];
});

test("should filter movies by watched status", () => {
  // Arrange

  // Act
  const result = filterMovies(movies, "watched");

  // Assert
  expect(result).toEqual([
    {
      id: "1",
      title: "Movie 1",
      description: "Description 1",
      watched: true,
    },
    {
      id: "3",
      title: "Movie 3",
      description: "Description 3",
      watched: true,
    },
  ]);
});

test("should filter movies by not watched status", () => {
  // Arrange

  // Act
  const result = filterMovies(movies, "not-watched");

  // Assert
  expect(result).toEqual([
    {
      id: "2",
      title: "Movie 2",
      description: "Description 2",
      watched: false,
    },
  ]);
});

test("should return all movies when filter is 'all'", () => {
  // Arrange

  // Act
  const result = filterMovies(movies, "all");

  // Assert
  expect(result).toEqual(movies);
});

test("should return all movies when filter is invalid", () => {
  // Arrange

  // Act
  const result = filterMovies(movies, "invalid-filter" as any);

  // Assert
  expect(result).toEqual(movies);
});

test("should return empty array when no movies match the filter", () => {
  // Arrange
  movies = [
    {
      id: "1",
      title: "Movie 1",
      description: "Description 1",
      watched: true,
    },
    {
      id: "2",
      title: "Movie 2",
      description: "Description 2",
      watched: true,
    },
    {
      id: "3",
      title: "Movie 3",
      description: "Description 3",
      watched: true,
    },
  ];

  // Act
  const result = filterMovies(movies, "not-watched");

  // Assert
  expect(result).toEqual([]);
});
