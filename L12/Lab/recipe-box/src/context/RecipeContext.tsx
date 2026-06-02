import {
  createContext,
  useContext,
  useReducer,
  useState,
  type ReactNode,
} from "react";
import { filterRecipes } from "../lib/filterRecipes";
import { recipeReducer } from "../lib/recipeReducer";
import type { Recipe } from "../lib/recipe.types";
import { validateRecipeInput } from "../lib/validateRecipe";

interface RecipeContextValue {
  recipes: Recipe[];
  visibleRecipes: Recipe[];
  query: string;
  setQuery: (query: string) => void;
  favoritesOnly: boolean;
  setFavoritesOnly: (favoritesOnly: boolean) => void;
  addRecipe: (title: string, content: string) => string | null;
  deleteRecipe: (id: string) => void;
  toggleFavorite: (id: string) => void;
}

const RecipeContext = createContext<RecipeContextValue | undefined>(undefined);

interface RecipeProviderProps {
  initialRecipes: Recipe[];
  children: ReactNode;
}

export function RecipeProvider({
  initialRecipes,
  children,
}: RecipeProviderProps) {
  const [recipes, dispatch] = useReducer(recipeReducer, initialRecipes);
  const [query, setQuery] = useState("");
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const visibleRecipes = filterRecipes(recipes, { query, favoritesOnly });

  const value: RecipeContextValue = {
    recipes,
    visibleRecipes,
    query,
    setQuery,
    favoritesOnly,
    setFavoritesOnly,
    addRecipe: (title: string, content: string) => {
      const error = validateRecipeInput(recipes, { title, content });
      if (error) {
        return error;
      }

      dispatch({
        type: "ADD_RECIPE",
        payload: { title: title.trim(), content: content.trim() },
      });
      return null;
    },
    deleteRecipe: (id: string) => {
      dispatch({ type: "DELETE_RECIPE", payload: { id } });
    },
    toggleFavorite: (id: string) => {
      dispatch({ type: "TOGGLE_FAVORITE", payload: { id } });
    },
  };

  return (
    <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>
  );
}

export function useRecipes() {
  const context = useContext(RecipeContext);

  if (!context) {
    throw new Error("useRecipes must be used within a RecipeProvider");
  }

  return context;
}
