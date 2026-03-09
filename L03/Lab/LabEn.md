# Task: Recipe Book (10p)

Your task is to create a recipe search engine in React.js. The main educational goal of this task is to practice managing more complex application state using the Context API and the `useReducer` hook.

## Materials

- [React.dev/learn - Extracting State Logic into a Reducer](https://react.dev/learn/extracting-state-logic-into-a-reducer)
- [React.dev/learn - Passing Data Deeply with Context](https://react.dev/learn/passing-data-deeply-with-context)
- [React.dev/learn - Scaling Up with Reducer and Context](https://react.dev/learn/scaling-up-with-reducer-and-context)

## Environment

Create a new project using Vite: `npm create vite@latest my-recipe-book -- --template react-ts`.

## Requirements

### 1. Implementation

Design a "Recipe Book" application that allows for:

- **Displaying recipes**: A list of tiles/elements, each containing the title and content of the recipe.
- **Adding recipes**: A simple form allowing the addition of a new recipe to the list (title + content).
- **Managing recipes**:
  - Deleting a selected recipe.
  - Marking a recipe as "favorite" (this should be visually apparent).
- **Filtering**:
  - Option to display only "favorite" recipes (e.g., checkbox or toggle).
  - Searching for recipes by keyword (text input searching both the name and content).
- **Styles**: The application should have basic, aesthetic styles (defined e.g., in `App.css`).

### 2. Architecture

- **Context API + useReducer**:
  - All recipe state management logic must be located in the `RecipeContext.tsx` file.
  - State logic should be implemented using `useReducer`.
  - The `RecipeProvider` component should accept `children` and provide state and modifying functions (dispatch or dedicated functions) to the rest of the application.
- **Components**: Divide the application into smaller, readable components.
- **TypeScript**: The code must be fully typed (no `any`).
