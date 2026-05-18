import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded'
import { Alert, Button, Stack } from '@mui/material'
import { useMovieCatalogContext } from '../MovieCatalogContext'
import { MovieForm } from '../components/MovieForm'

export function AddMoviePage() {
  const { categories, addMovie, openMovies, openAdminAddCategory } = useMovieCatalogContext()

  if (categories.length === 0) {
    return (
      <Stack spacing={2}>
        <Alert severity="warning">Create at least one category before adding a movie.</Alert>
        <Button
          variant="contained"
          onClick={openAdminAddCategory}
          startIcon={<AddCircleOutlineRoundedIcon />}
        >
          Go to Add Category
        </Button>
      </Stack>
    )
  }

  return (
    <MovieForm
      title="Add Movie"
      submitLabel="Create Movie"
      categories={categories}
      initialValue={{
        title: '',
        director: '',
        year: new Date().getFullYear(),
        rating: 7,
        categoryIds: [categories[0].id],
        description: '',
      }}
      onSubmit={(movie) => {
        addMovie(movie)
        openMovies()
      }}
    />
  )
}
