import { Card, CardContent, Grid, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { useMovieCatalogContext } from '../MovieCatalogContext'
import { MovieCard } from '../components/MovieCard'
import {
  MovieListFilters,
  type MovieCategoryFilter,
  type MovieSortBy,
  type MovieWatchedFilter,
} from '../components/MovieListFilters'
import { resolveCategoryNames, useVisibleMovies } from '../components/useVisibleMovies'

export function MoviesListPage() {
  const { movies, categories, role, toggleMovieWatched, openEditMovie } = useMovieCatalogContext()

  const [query, setQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState<MovieCategoryFilter>('all')
  const [watchedFilter, setWatchedFilter] = useState<MovieWatchedFilter>('all')
  const [sortBy, setSortBy] = useState<MovieSortBy>('title-asc')

  const visibleMovies = useVisibleMovies({
    movies,
    query,
    categoryFilter,
    watchedFilter,
    sortBy,
  })

  return (
    <Stack spacing={3}>
      <Typography variant="h4" sx={{ fontWeight: 700 }}>
        Movie List
      </Typography>

      <MovieListFilters
        categories={categories}
        query={query}
        categoryFilter={categoryFilter}
        watchedFilter={watchedFilter}
        sortBy={sortBy}
        onQueryChange={setQuery}
        onCategoryFilterChange={setCategoryFilter}
        onWatchedFilterChange={setWatchedFilter}
        onSortByChange={setSortBy}
      />

      <Typography variant="body2" color="text.secondary">
        Showing {visibleMovies.length} of {movies.length} movies.
      </Typography>

      <Grid container spacing={2}>
        {visibleMovies.map((movie) => {
          const categoryNames = resolveCategoryNames(movie, categories)

          return (
            <MovieCard
              key={movie.id}
              movie={movie}
              categoryNames={categoryNames}
              canManage={role === 'admin'}
              onToggleWatched={toggleMovieWatched}
              onEditMovie={openEditMovie}
            />
          )
        })}

        {visibleMovies.length === 0 ? (
          <Grid size={12}>
            <Card>
              <CardContent>
                <Typography color="text.secondary">
                  No movies match the current filters.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ) : null}
      </Grid>
    </Stack>
  )
}
