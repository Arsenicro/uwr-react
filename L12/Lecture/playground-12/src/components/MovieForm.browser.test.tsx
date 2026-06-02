import { expect, test } from "vitest";
import { render } from 'vitest-browser-react';
import { MovieProvider } from "../context/MovieContext";
import MovieForm from "./MovieForm";
import MovieList from "./MovieList";


test("should render form", async () => {
  // Arrange
  const screen = await render(
    <MovieProvider initialMovies={[]}>
      <MovieForm />
      <MovieList />
    </MovieProvider>
  );
  // <MovieForm addMovie={vi.fn()} /> 

  const form = screen.getByRole("form");

  const titleInput = form.getByLabelText("Title");
  const descriptionInput = form.getByLabelText("Description");
  const submitButton = form.getByRole("button", { name: "Add Movie" });

  const movieTitle = screen.getByText("Test title");
  const movieDescription = screen.getByText("Test description");

  const movieButton = screen.getByRole("button", { name: "Mark Test title as watched" });

  // Act
  await titleInput.fill("Test title");
  await descriptionInput.fill("Test description");
  await submitButton.click();



  // Assert

  expect(titleInput).toBeInTheDocument();
  expect(descriptionInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
  expect(movieTitle).toBeInTheDocument();
  expect(movieDescription).toBeInTheDocument();

  await movieButton.click();


});