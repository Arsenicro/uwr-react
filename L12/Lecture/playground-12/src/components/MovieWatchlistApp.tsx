import { useDarkMode } from "../hooks/useDarkMode";
import MovieFilters from "./MovieFilters";
import MovieForm from "./MovieForm";
import MovieList from "./MovieList";
import ThemeToggle from "./ThemeToggle";

export default function MovieWatchlistApp() {
  const { isDark, toggle } = useDarkMode();

  return (
    <div
      className={`min-h-screen bg-slate-100 text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100 ${isDark ? "dark" : ""}`}
    >
      <header className="border-b border-indigo-200 bg-indigo-950 text-white dark:border-indigo-900">
        <div className="mx-auto flex max-w-3xl items-start justify-between gap-4 px-6 py-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-300">
              Disney collection
            </p>
            <h1 className="mt-1 text-4xl font-bold tracking-tight">
              Movie Watchlist
            </h1>
            <p className="mt-2 max-w-xl text-indigo-200">
              Track which Disney movies you have watched.
            </p>
          </div>
          <ThemeToggle isDark={isDark} onToggle={toggle} />
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-8">
        <MovieForm />
        <MovieFilters />
        <MovieList />
      </main>
    </div>
  );
}
