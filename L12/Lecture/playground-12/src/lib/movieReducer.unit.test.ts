import { afterEach, expect, test, vi } from "vitest";
import * as getRandomUUIDModule from "./getRandomUUID";
import type { Movie } from "./movie.types";
import { movieReducer } from "./movieReducer";

/* vi.mock("./getRandomUUID", () => ({
  getRandomUUID: vi.fn().mockReturnValue("1234"),
})); */

afterEach(() => {
  vi.restoreAllMocks();
});

test("should add movie", () => {
  // Arrange
  const movies: Movie[] = [];
  vi.spyOn(getRandomUUIDModule, "getRandomUUID").mockReturnValue("1234");

  /*   const mockFn = vi.fn().mockReturnValue("1234");
  console.log(mockFn("test"));
  expect(mockFn).toHaveBeenCalledTimes(1);
  expect(mockFn).toHaveBeenCalledWith("test");

  console.log(getRandomUUID()); */

  // Act
  const result = movieReducer(movies, {
    type: "ADD_MOVIE",
    payload: {
      title: "Movie 1",
      description: "Description 1",
      watched: false,
    },
  });
  // Assert
  expect(result[0]).toMatchObject({
    title: "Movie 1",
    description: "Description 1",
    watched: false,
  });
  expect(result).toEqual([
    {
      id: expect.any(String),
      title: "Movie 1",
      description: "Description 1",
      watched: false,
    },
  ]);
  expect(result).toEqual([
    {
      id: "1234",
      title: "Movie 1",
      description: "Description 1",
      watched: false,
    },
  ]);
});

test("should add movie 2", () => {
  // Arrange
  const movies: Movie[] = [];
  vi.spyOn(getRandomUUIDModule, "getRandomUUID").mockReturnValue("1234");

  // const mockFn = vi.fn().mockReturnValue("1234");
  // console.log(mockFn("test"));
  // expect(mockFn).toHaveBeenCalledTimes(1);
  // expect(mockFn).toHaveBeenCalledWith("test");

  // console.log(getRandomUUID());

  // Act
  const result = movieReducer(movies, {
    type: "ADD_MOVIE",
    payload: {
      title: "Movie 1",
      description: "Description 1",
      watched: false,
    },
  });
  // Assert
  expect(result[0]).toMatchObject({
    title: "Movie 1",
    description: "Description 1",
    watched: false,
  });
  expect(result).toEqual([
    {
      id: expect.any(String),
      title: "Movie 1",
      description: "Description 1",
      watched: false,
    },
  ]);
  expect(result).toEqual([
    {
      id: "1234",
      title: "Movie 1",
      description: "Description 1",
      watched: false,
    },
  ]);
});
