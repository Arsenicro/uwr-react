import { useRecipes } from "../context/RecipeContext";
import RecipeCard from "./RecipeCard";

export default function RecipeList() {
  const { visibleRecipes, toggleFavorite, deleteRecipe } = useRecipes();

  if (visibleRecipes.length === 0) {
    return (
      <p role="status" className="text-stone-600 dark:text-stone-400">
        No recipes found.
      </p>
    );
  }

  return (
    <section aria-label="Recipe list" className="space-y-4">
      {visibleRecipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onToggleFavorite={() => toggleFavorite(recipe.id)}
          onDelete={() => deleteRecipe(recipe.id)}
        />
      ))}
    </section>
  );
}
