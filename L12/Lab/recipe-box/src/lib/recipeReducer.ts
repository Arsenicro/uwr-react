import type { Recipe, RecipeAction } from "./recipe.types";
import { getRandomUUID } from "./getRandomUUID";

export function recipeReducer(
  state: Recipe[],
  action: RecipeAction,
): Recipe[] {
  switch (action.type) {
    case "ADD_RECIPE": {
      const newRecipe: Recipe = {
        id: getRandomUUID(),
        title: action.payload.title,
        content: action.payload.content,
        isFavorite: false,
      };
      return [...state, newRecipe];
    }
    case "DELETE_RECIPE":
      return state.filter((recipe) => recipe.id !== action.payload.id);
    case "TOGGLE_FAVORITE":
      return state.map((recipe) =>
        recipe.id === action.payload.id
          ? { ...recipe, isFavorite: !recipe.isFavorite }
          : recipe,
      );
    default:
      return state;
  }
}
