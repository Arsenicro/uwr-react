import { useMovieCatalogContext } from '../MovieCatalogContext'
import { AddMoviePage } from '../pages/AddMoviePage'
import { AdminAddCategoryPage } from '../pages/AdminAddCategoryPage'
import { AdminCategoriesPage } from '../pages/AdminCategoriesPage'
import { EditMoviePage } from '../pages/EditMoviePage'
import { MoviesListPage } from '../pages/MoviesListPage'
import { AdminLayout } from './AdminLayout'

export type Page =
  | 'movies'
  | 'add-movie'
  | 'edit-movie'
  | 'admin-categories'
  | 'admin-add-category'

export function PageContent() {
  const { page, role } = useMovieCatalogContext()

  const moviesPage = <MoviesListPage />

  switch (page) {
    case 'movies':
      return moviesPage
    case 'add-movie':
      if (role !== 'admin') {
        return moviesPage
      }

      return (
        <AddMoviePage />
      )
    case 'edit-movie':
      if (role !== 'admin') {
        return moviesPage
      }

      return (
        <EditMoviePage />
      )
    case 'admin-categories':
    case 'admin-add-category':
      if (role !== 'admin') {
        return moviesPage
      }

      return (
        <AdminLayout>
          {page === 'admin-categories' ? (
            <AdminCategoriesPage />
          ) : (
            <AdminAddCategoryPage />
          )}
        </AdminLayout>
      )
    default:
      return null
  }
}
