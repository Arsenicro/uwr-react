import { Navigate, useNavigate, useParams } from 'react-router';
import { useMovieCatalogContext } from '../MovieCatalogContext';
import { MovieForm } from '../components/MovieForm';

export function EditMoviePage() {
  const { movies, categories, updateMovie } = useMovieCatalogContext()
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();

  const movie = movies.find(m => m.id === params.id);

  console.log('EditMoviePage params:', params);

  if (!movie) {
    return (
      <Navigate to="/" replace state={{ error: `Movie ${params.id} not found` }} />
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
        navigate('/')
      }}
    />
  )
}
