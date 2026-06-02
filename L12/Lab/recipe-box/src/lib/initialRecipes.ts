import type { Recipe } from "./recipe.types";

export const initialRecipes: Recipe[] = [
  {
    id: "recipe-pancakes",
    title: "Pancakes",
    content: "Mix flour, milk, and eggs. Fry on a hot pan until golden.",
    isFavorite: true,
  },
  {
    id: "recipe-salad",
    title: "Garden Salad",
    content: "Combine lettuce, tomato, and cucumber. Dress with olive oil.",
    isFavorite: false,
  },
  {
    id: "recipe-pasta",
    title: "Tomato Pasta",
    content: "Cook pasta. Simmer tomatoes with garlic and toss together.",
    isFavorite: false,
  },
];
