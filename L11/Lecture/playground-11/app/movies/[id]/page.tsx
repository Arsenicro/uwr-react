import { Movie } from "@/lib/movie.types";
import Link from "next/link";
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
      <h1 className="text-2xl font-bold">Movie Details - {movie.title}</h1>
      <p className="mt-4">{movie.description}</p>
      <p className="mt-2 text-sm">
        Status:{" "}
        <span className={movie.watched ? "text-green-600" : "text-red-600"}>
          {movie.watched ? "Watched" : "Not Watched"}
        </span>
      </p>
      <Link href={`/movies/${movie.id}/edit`} className="mt-4 inline-block text-blue-500 hover:underline">
        Edit Movie
      </Link>
    </div>
  );
}