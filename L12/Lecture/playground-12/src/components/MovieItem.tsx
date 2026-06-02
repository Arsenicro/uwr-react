import type { Movie } from "../lib/movie.types";

interface MovieItemProps {
  movie: Movie;
  onToggleWatched: () => void;
  onDelete: () => void;
}

export default function MovieItem({
  movie,
  onToggleWatched,
  onDelete,
}: MovieItemProps) {
  return (
    <li className="rounded-r-xl border border-l-4 border-slate-200 border-l-indigo-500 bg-white p-5 shadow-md dark:border-slate-700 dark:border-l-indigo-400 dark:bg-slate-900">
      <article aria-label={`Movie: ${movie.title}`}>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
          {movie.title}
        </h2>
        <p className="mt-2 leading-relaxed text-slate-700 dark:text-slate-300">
          {movie.description}
        </p>
        <p className="mt-3 text-sm">
          Status:{" "}
          <span
            className={
              movie.watched
                ? "rounded-full bg-emerald-100 px-2 py-0.5 font-medium text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
                : "rounded-full bg-orange-100 px-2 py-0.5 font-medium text-orange-800 dark:bg-orange-950 dark:text-orange-300"
            }
          >
            {movie.watched ? "Watched" : "Not watched"}
          </span>
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            className="rounded-full border border-slate-300 px-4 py-1.5 text-sm text-slate-700 hover:border-indigo-300 hover:text-indigo-700 dark:border-slate-600 dark:text-slate-300 dark:hover:border-indigo-600 dark:hover:text-indigo-300"
            aria-label={
              movie.watched
                ? `Mark ${movie.title} as not watched`
                : `Mark ${movie.title} as watched`
            }
            onClick={onToggleWatched}
          >
            {movie.watched ? "Unwatch" : "Mark watched"}
          </button>
          <button
            type="button"
            className="rounded-full border border-slate-300 px-4 py-1.5 text-sm text-slate-600 hover:border-red-300 hover:text-red-700 dark:border-slate-600 dark:text-slate-400 dark:hover:border-red-700 dark:hover:text-red-400"
            aria-label={`Delete ${movie.title}`}
            onClick={onDelete}
          >
            Remove
          </button>
        </div>
      </article>
    </li>
  );
}
