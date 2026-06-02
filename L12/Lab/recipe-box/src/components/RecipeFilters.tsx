import { useRecipes } from "../context/RecipeContext";

const fieldClassName =
  "mt-1 block w-full rounded-xl border border-stone-300 bg-stone-50 px-3 py-2 text-stone-900 focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-200 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-100 dark:focus:border-teal-500 dark:focus:ring-teal-900";

export default function RecipeFilters() {
  const { query, setQuery, favoritesOnly, setFavoritesOnly } = useRecipes();

  return (
    <section
      aria-label="Recipe filters"
      className="mb-8 flex flex-col gap-4 rounded-2xl border border-stone-200 bg-white p-4 sm:flex-row sm:items-end dark:border-stone-700 dark:bg-stone-900"
    >
      <label className="block flex-1 text-sm font-medium text-stone-700 dark:text-stone-300">
        Search recipes
        <input
          type="search"
          className={fieldClassName}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </label>

      <button
        type="button"
        className={`rounded-full px-4 py-2 text-sm font-medium transition ${
          favoritesOnly
            ? "bg-amber-400 text-amber-950 hover:bg-amber-300"
            : "border border-stone-300 text-stone-600 hover:bg-stone-100 dark:border-stone-600 dark:text-stone-300 dark:hover:bg-stone-800"
        }`}
        aria-pressed={favoritesOnly}
        onClick={() => setFavoritesOnly(!favoritesOnly)}
      >
        {favoritesOnly ? "★ Favorites only" : "☆ Show favorites only"}
      </button>
    </section>
  );
}
