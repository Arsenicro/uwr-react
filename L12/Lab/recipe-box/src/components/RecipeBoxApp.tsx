import { useDarkMode } from "../hooks/useDarkMode";
import RecipeFilters from "./RecipeFilters";
import RecipeForm from "./RecipeForm";
import RecipeList from "./RecipeList";
import ThemeToggle from "./ThemeToggle";

export default function RecipeBoxApp() {
  const { isDark, toggle } = useDarkMode();

  return (
    <div
      className={`min-h-screen bg-stone-100 text-stone-900 antialiased dark:bg-stone-950 dark:text-stone-100 ${isDark ? "dark" : ""}`}
    >
      <header className="border-b border-teal-800 bg-teal-900 text-stone-50 dark:border-teal-950">
        <div className="mx-auto flex max-w-3xl items-start justify-between gap-4 px-6 py-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-300">
              Home kitchen
            </p>
            <h1 className="mt-1 font-serif text-4xl font-bold tracking-tight">
              Recipe Box
            </h1>
            <p className="mt-2 max-w-xl text-teal-100">
              Collect, favorite, and search your recipes.
            </p>
          </div>
          <ThemeToggle isDark={isDark} onToggle={toggle} />
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-8">
        <RecipeForm />
        <RecipeFilters />
        <RecipeList />
      </main>
    </div>
  );
}
