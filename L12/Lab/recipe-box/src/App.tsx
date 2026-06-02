import RecipeBoxApp from "./components/RecipeBoxApp";
import { RecipeProvider } from "./context/RecipeContext";
import { initialRecipes } from "./lib/initialRecipes";

export default function App() {
  return (
    <RecipeProvider initialRecipes={initialRecipes}>
      <RecipeBoxApp />
    </RecipeProvider>
  );
}
