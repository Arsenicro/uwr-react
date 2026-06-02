import type { Recipe } from "./recipe.types";

export interface RecipeFilterOptions {
  query: string;
  favoritesOnly: boolean;
}

export function filterRecipes(
  recipes: Recipe[],
  { query, favoritesOnly }: RecipeFilterOptions,
): Recipe[] {
  const normalizedQuery = query.trim().toLowerCase();

  return recipes.filter((recipe) => {
    if (favoritesOnly && !recipe.isFavorite) {
      return false;
    }

    if (!normalizedQuery) {
      return true;
    }

    return (
      recipe.title.toLowerCase().includes(normalizedQuery) ||
      recipe.content.toLowerCase().includes(normalizedQuery)
    );
  });
}
