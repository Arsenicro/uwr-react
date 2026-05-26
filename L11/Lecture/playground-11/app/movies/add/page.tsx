import MovieForm from "@/components/MovieForm";
import { createMovie } from "@/lib/actions";

export default function AddMovie() {

  return (
    <div>
      <h1 className="text-2xl font-bold">Add Movie</h1>
      <MovieForm saveLabel="Create Movie" actionReducer={createMovie} />
    </div>

  );
}
