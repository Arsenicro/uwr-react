import { useNavigate } from 'react-router'
import { useMovieCatalogContext } from '../MovieCatalogContext'
import { MovieForm } from '../components/MovieForm'

export function AddMoviePage() {
  const { categories, addMovie } = useMovieCatalogContext()
  const navigate = useNavigate()

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
        navigate('/')
      }}
    />
  )
}
