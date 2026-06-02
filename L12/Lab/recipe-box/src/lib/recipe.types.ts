export interface Recipe {
  id: string;
  title: string;
  content: string;
  isFavorite: boolean;
}

interface AddRecipeAction {
  type: "ADD_RECIPE";
  payload: {
    title: string;
    content: string;
  };
}

interface DeleteRecipeAction {
  type: "DELETE_RECIPE";
  payload: {
    id: string;
  };
}

interface ToggleFavoriteAction {
  type: "TOGGLE_FAVORITE";
  payload: {
    id: string;
  };
}

export type RecipeAction =
  | AddRecipeAction
  | DeleteRecipeAction
  | ToggleFavoriteAction;
