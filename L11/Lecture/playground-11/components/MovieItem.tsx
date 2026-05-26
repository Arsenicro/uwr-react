import { Movie } from "@/lib/movie.types";
import Link from "next/link";

export default function MovieItem({ movie }: { movie: Movie }) {
  return (
    <li key={movie.id} className="p-4 border rounded">
      <h2 className="text-xl font-semibold">{movie.title}</h2>
      <p className="mt-2 text-gray-600">{movie.description}</p>
      <p className="mt-2 text-sm">
        Status:{" "}
        <span className={movie.watched ? "text-green-600" : "text-red-600"}>
          {movie.watched ? "Watched" : "Not Watched"}
        </span>
      </p>
      <Link href={`/movies/${movie.id}`} className="mt-4 inline-block text-blue-500 hover:underline">
        View Details
      </Link>
    </li>
  );
}