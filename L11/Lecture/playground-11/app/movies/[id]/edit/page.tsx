import MovieForm from "@/components/MovieForm";
import { updateMovie } from "@/lib/actions";
import { Movie } from "@/lib/movie.types";
import { notFound } from "next/navigation";

export default async function MovieDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const response = await fetch(`http://localhost:3001/movies/${id}`);
  const movie: Movie = await response.json();

  if (!response.ok) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Movie Edit - {movie.title}</h1>
      <MovieForm saveLabel={"Edit Movie"} actionReducer={updateMovie} initialMovie={movie} />
    </div>
  );
}