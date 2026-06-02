import MovieWatchlistApp from "./components/MovieWatchlistApp";
import { MovieProvider } from "./context/MovieContext";
import { initialMovies } from "./lib/initialMovies";

export default function App() {
  return (
    <MovieProvider initialMovies={initialMovies}>
      <MovieWatchlistApp />
    </MovieProvider>
  );
}
