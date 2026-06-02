import type { Recipe } from "../lib/recipe.types";

interface RecipeCardProps {
  recipe: Recipe;
  onToggleFavorite: () => void;
  onDelete: () => void;
}

export default function RecipeCard({
  recipe,
  onToggleFavorite,
  onDelete,
}: RecipeCardProps) {
  return (
    <article
      aria-label={`Recipe: ${recipe.title}`}
      className={`relative overflow-hidden rounded-2xl border p-5 shadow-sm ${
        recipe.isFavorite
          ? "border-amber-300 bg-amber-50 shadow-amber-100 ring-2 ring-amber-200 dark:border-amber-700 dark:bg-amber-950/30 dark:shadow-none dark:ring-amber-900/60"
          : "border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-900"
      }`}
    >
      {recipe.isFavorite && (
        <div className="absolute inset-y-0 left-0 w-1.5 bg-amber-400 dark:bg-amber-500" />
      )}

      <header className="mb-3 flex items-start justify-between gap-4 pl-2">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="font-serif text-xl font-semibold text-stone-900 dark:text-stone-100">
              {recipe.title}
            </h2>
            {recipe.isFavorite && (
              <span className="rounded-full bg-amber-400 px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-amber-950">
                Favorite
              </span>
            )}
          </div>
        </div>
        <button
          type="button"
          className={`shrink-0 rounded-full px-3 py-1.5 text-sm font-medium transition ${
            recipe.isFavorite
              ? "bg-amber-400 text-amber-950 hover:bg-amber-300"
              : "border border-stone-300 text-stone-600 hover:bg-stone-100 dark:border-stone-600 dark:text-stone-300 dark:hover:bg-stone-800"
          }`}
          aria-label={
            recipe.isFavorite
              ? `Remove ${recipe.title} from favorites`
              : `Add ${recipe.title} to favorites`
          }
          aria-pressed={recipe.isFavorite}
          onClick={onToggleFavorite}
        >
          {recipe.isFavorite ? "★ Saved" : "☆ Save"}
        </button>
      </header>

      <p className="pl-2 text-stone-700 dark:text-stone-300">{recipe.content}</p>

      <button
        type="button"
        className="mt-4 ml-2 rounded-lg border border-stone-300 px-3 py-1.5 text-sm text-stone-600 hover:bg-stone-100 dark:border-stone-600 dark:text-stone-400 dark:hover:bg-stone-800"
        aria-label={`Delete ${recipe.title}`}
        onClick={onDelete}
      >
        Delete
      </button>
    </article>
  );
}
