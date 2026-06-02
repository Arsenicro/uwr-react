import { useMovies } from "../context/MovieContext";
import type { WatchedFilter } from "../lib/movie.types";

const filters: { label: string; value: WatchedFilter }[] = [
  { label: "All", value: "all" },
  { label: "Watched", value: "watched" },
  { label: "Not watched", value: "not-watched" },
];

export default function MovieFilters() {
  const { watchedFilter, setWatchedFilter } = useMovies();

  return (
    <div
      className="mb-8 flex flex-wrap gap-2 rounded-xl bg-slate-200/70 p-3 dark:bg-slate-800/70"
      aria-label="Movie filters"
      role="group"
    >
      {filters.map((filter) => (
        <button
          key={filter.value}
          type="button"
          aria-pressed={watchedFilter === filter.value}
          className={
            watchedFilter === filter.value
              ? "rounded-full bg-indigo-700 px-5 py-2 text-sm font-medium text-white dark:bg-indigo-500"
              : "rounded-full bg-white px-5 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-indigo-50 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-700"
          }
          onClick={() => setWatchedFilter(filter.value)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
