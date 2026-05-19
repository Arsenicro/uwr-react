import { CssBaseline, ThemeProvider } from '@mui/material'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import { theme } from '../theme'
import { MovieCatalogProvider } from './MovieCatalogContext'
import { AdminLayout } from './components/AdminLayout'
import { AppLayout } from './components/AppLayout'
import { AddMoviePage } from './pages/AddMoviePage'
import { AdminAddCategoryPage } from './pages/AdminAddCategoryPage'
import { AdminCategoriesPage } from './pages/AdminCategoriesPage'
import { EditMoviePage } from './pages/EditMoviePage'
import { MoviesListPage } from './pages/MoviesListPage'

function App() {
  return (

    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MovieCatalogProvider>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route path="" element={<MoviesListPage />} />
              <Route path="add-movie" element={<AddMoviePage />} />
              <Route path="edit-movie/:id" element={<EditMoviePage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
              <Route path='admin' element={<AdminLayout />}>
                {/* <Route path='categories?' element={<AdminCategoriesPage />} /> */}
                <Route path='categories' element={<AdminCategoriesPage />} />
                <Route path='add-category' element={<AdminAddCategoryPage />} />
                {/*  <Route path='*' element={<Navigate to="/admin/categories" replace />} /> */}
              </Route>
            </Route>
          </Routes>
        </MovieCatalogProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
