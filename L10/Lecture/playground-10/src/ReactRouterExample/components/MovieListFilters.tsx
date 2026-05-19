import { Grid, MenuItem, TextField } from '@mui/material'
import type { Category } from '../../types'

export type MovieCategoryFilter = 'all' | string
export type MovieWatchedFilter = 'all' | 'watched' | 'not-watched'
export type MovieSortBy =
  | 'title-asc'
  | 'title-desc'
  | 'year-desc'
  | 'year-asc'
  | 'rating-desc'
  | 'rating-asc'

type MovieListFiltersProps = {
  categories: Category[]
  query: string
  categoryFilter: MovieCategoryFilter
  watchedFilter: MovieWatchedFilter
  sortBy: MovieSortBy
  onQueryChange: (value: string) => void
  onCategoryFilterChange: (value: MovieCategoryFilter) => void
  onWatchedFilterChange: (value: MovieWatchedFilter) => void
  onSortByChange: (value: MovieSortBy) => void
}

export function MovieListFilters({
  categories,
  query,
  categoryFilter,
  watchedFilter,
  sortBy,
  onQueryChange,
  onCategoryFilterChange,
  onWatchedFilterChange,
  onSortByChange,
}: MovieListFiltersProps) {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          label="Search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          fullWidth
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <TextField
          select
          label="Category"
          value={categoryFilter}
          onChange={(event) => onCategoryFilterChange(event.target.value)}
          fullWidth
        >
          <MenuItem value="all">All categories</MenuItem>
          {categories.map((category) => (
            <MenuItem key={category.id} value={category.id}>
              {category.name}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 2.5 }}>
        <TextField
          select
          label="Watched"
          value={watchedFilter}
          onChange={(event) => onWatchedFilterChange(event.target.value as MovieWatchedFilter)}
          fullWidth
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="watched">Watched</MenuItem>
          <MenuItem value="not-watched">Not watched</MenuItem>
        </TextField>
      </Grid>
      <Grid size={{ xs: 12, md: 2.5 }}>
        <TextField
          select
          label="Sort by"
          value={sortBy}
          onChange={(event) => onSortByChange(event.target.value as MovieSortBy)}
          fullWidth
        >
          <MenuItem value="title-asc">Title A-Z</MenuItem>
          <MenuItem value="title-desc">Title Z-A</MenuItem>
          <MenuItem value="year-desc">Year newest</MenuItem>
          <MenuItem value="year-asc">Year oldest</MenuItem>
          <MenuItem value="rating-desc">Rating high-low</MenuItem>
          <MenuItem value="rating-asc">Rating low-high</MenuItem>
        </TextField>
      </Grid>
    </Grid>
  )
}
