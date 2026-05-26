import MovieItem from "@/components/MovieItem";
import { Movie } from "@/lib/movie.types";
import Link from "next/link";
import { Suspense } from "react";

const filters = [
  { label: "All", value: "all", query: "?watched=all" },
  { label: "Watched", value: "watched", query: "?watched=true" },
  { label: "Not Watched", value: "not-watched", query: "?watched=false" },
]

async function MoviesList({ filterQuery }: { filterQuery: string }) {
  const response = await fetch(`http://localhost:3001/movies?${filterQuery}`);
  const movies: Movie[] = await response.json();

  return (
    <ul className="mt-4 space-y-4">
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </ul>
  )
}

const getWatchedFilter = (searchParams: { [key: string]: string | string[] | undefined }) => {
  const watched = searchParams.watched;
  if (watched === "true") return "watched";
  if (watched === "false") return "not-watched";
  return "all";
}

export default async function Movies({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const params = await searchParams;
  const watchedFilter = getWatchedFilter(params);

  return (
    <div>
      <h1 className="text-2xl font-bold">Movies</h1>
      <div className="mt-4 flex space-x-4">
        {filters.map((filter) => (
          <Link
            key={filter.value}
            href={`/movies${filter.query}`}
            className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition ${watchedFilter === filter.value ? "bg-green-700" : ""}`}
          >
            {filter.label}
          </Link>
        ))}
      </div>
      <Suspense key={watchedFilter} fallback={<p className="text-gray-500">Loading movies...</p>}>
        <MoviesList filterQuery={`watched=${watchedFilter}`} />
      </Suspense>
    </div>
  );
}
