import EditRoundedIcon from '@mui/icons-material/EditRounded'
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded'
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded'
import { Button, Card, CardContent, CardHeader, Chip, Grid, Stack, Typography } from '@mui/material'
import type { Movie } from '../../types'

type MovieCardProps = {
  movie: Movie
  categoryNames: string[]
  canManage: boolean
  onToggleWatched: (movieId: string) => void
  onEditMovie: (movieId: string) => void
}

export function MovieCard({
  movie,
  categoryNames,
  canManage,
  onToggleWatched,
  onEditMovie,
}: MovieCardProps) {
  return (
    <Grid size={{ xs: 12, md: 6 }}>
      <Card sx={{ height: '100%' }}>
        <CardHeader
          title={movie.title}
          subheader={`${movie.year} - ${movie.director}`}
          action={
            <Stack direction="row" spacing={1}>
              <Button
                variant={movie.watched ? 'contained' : 'outlined'}
                size="small"
                color={movie.watched ? 'success' : 'inherit'}
                onClick={() => onToggleWatched(movie.id)}
                startIcon={movie.watched ? <VisibilityRoundedIcon /> : <VisibilityOffRoundedIcon />}
              >
                {movie.watched ? 'Watched' : 'Mark Watched'}
              </Button>
              {canManage ? (
                <Button
                  variant="text"
                  size="small"
                  onClick={() => onEditMovie(movie.id)}
                  startIcon={<EditRoundedIcon />}
                >
                  Edit
                </Button>
              ) : null}
            </Stack>
          }
        />
        <CardContent>
          <Stack spacing={1.5}>
            <Stack direction="row" spacing={1}>
              {categoryNames.length > 0 ? (
                categoryNames.map((name) => <Chip key={name} label={name} size="small" />)
              ) : (
                <Chip label="Uncategorized" size="small" />
              )}
              <Chip label={`Rating: ${movie.rating.toFixed(1)}`} color="secondary" size="small" />
              <Chip
                label={movie.watched ? 'Watched' : 'Not watched'}
                color={movie.watched ? 'success' : 'default'}
                size="small"
              />
            </Stack>
            <Typography variant="body2" color="text.secondary">
              {movie.description}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  )
}
