import EditIcon from '@mui/icons-material/Edit';
import { Card, CardContent, Chip, Grid, IconButton, Typography } from "@mui/material";
import type { Movie } from "./moviesData";

function MovieCard({ movie, triggerMovieEdit }: { movie: Movie, triggerMovieEdit: () => void }) {
  return (
    <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%', gap: 2 }}>
        <Typography gutterBottom variant="h5" component="div" sx={{ margin: 0 }}>
          {movie.title} <IconButton aria-label="Edit" onClick={triggerMovieEdit}><EditIcon /></IconButton>
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', flex: 1, display: 'flex', alignItems: 'center' }}>
          {movie.description}
        </Typography>
        <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
          {movie.categories.map((category) => (
            <Chip key={category} label={category} sx={(theme) => ({ backgroundColor: theme.chipColors[category] })} />
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}

export default MovieCard;