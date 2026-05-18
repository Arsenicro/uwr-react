import { Alert, Stack } from '@mui/material'
import { useMovieCatalogContext } from '../MovieCatalogContext'
import { MovieForm } from '../components/MovieForm'

export function EditMoviePage() {
  const { editedMovie: movie, categories, updateMovie, openMovies } = useMovieCatalogContext()

  if (!movie) {
    return (
      <Stack>
        <Alert severity="warning">Movie not found.</Alert>
      </Stack>
    )
  }

  return (
    <MovieForm
      title={`Edit Movie: ${movie.title}`}
      submitLabel="Save Changes"
      categories={categories}
      initialValue={{
        title: movie.title,
        director: movie.director,
        year: movie.year,
        rating: movie.rating,
        categoryIds: movie.categoryIds,
        description: movie.description,
      }}
      onSubmit={(value) => {
        updateMovie(movie.id, value)
        openMovies()
      }}
    />
  )
}
