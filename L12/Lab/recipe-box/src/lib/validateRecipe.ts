import type { Recipe } from "./recipe.types";

export function validateRecipeInput(
  recipes: Recipe[],
  input: { title: string; content: string },
): string | null {
  const title = input.title.trim();
  const content = input.content.trim();

  if (!title) {
    return "Title is required.";
  }

  if (!content) {
    return "Content is required.";
  }

  const isDuplicate = recipes.some(
    (recipe) => recipe.title.toLowerCase() === title.toLowerCase(),
  );

  if (isDuplicate) {
    return "A recipe with this title already exists.";
  }

  return null;
}
