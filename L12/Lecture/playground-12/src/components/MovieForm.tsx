import { useState, type SubmitEvent } from "react";
import { useMovies } from "../context/MovieContext";

const fieldClassName =
  "mt-1 block w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-indigo-400 dark:focus:ring-indigo-900";

export default function MovieForm() {
  const { addMovie } = useMovies();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [watched, setWatched] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = addMovie(title, description, watched);
    if (message) {
      setError(message);
      return;
    }

    setError(null);
    setTitle("");
    setDescription("");
    setWatched(false);
  };

  return (
    <form
      className="mb-8 space-y-4 rounded-2xl border-2 border-dashed border-indigo-300 bg-white p-6 dark:border-indigo-800 dark:bg-slate-900"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl font-bold text-indigo-900 dark:text-indigo-300">
        New movie
      </h2>

      {error && (
        <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600 dark:border-red-900 dark:bg-red-950 dark:text-red-400">
          {error}
        </div>
      )}

      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        Title
        <input
          type="text"
          name="title"
          className={fieldClassName}
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
            setError(null);
          }}
        />
      </label>

      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        Description
        <textarea
          name="description"
          className={`${fieldClassName} min-h-28 resize-y`}
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
            setError(null);
          }}
        />
      </label>

      <label className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
        <input
          type="checkbox"
          name="watched"
          className="size-4 rounded border-slate-400 text-indigo-600 focus:ring-indigo-500 dark:border-slate-500"
          checked={watched}
          onChange={(event) => setWatched(event.target.checked)}
        />
        Watched
      </label>

      <button
        type="submit"
        className="rounded-full bg-indigo-600 px-6 py-2.5 font-medium text-white shadow hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400"
      >
        Add movie
      </button>
    </form>
  );
}
