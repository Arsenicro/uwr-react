import { Card, CardContent, CardMedia, Chip, Stack, Typography } from "@mui/material";
import type { Movie } from "../moviesData";

function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Card sx={{ maxWidth: 345, height: '100%' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={movie.image}
        title={movie.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {movie.description}
        </Typography>
        <Stack direction="row" spacing={1}>
          {movie.categories.map((category) => (
            <Chip key={category} label={category} sx={(theme) => ({ backgroundColor: theme.customColor, [theme.breakpoints.up('md')]: { backgroundColor: '#fff' } })} />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}

export default MovieCard;