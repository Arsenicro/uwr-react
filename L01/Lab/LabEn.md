# Assignment: Business Card (10p)

Your task is to create a business card in React.js. The main educational goal of this assignment is to practice creating small, reusable components and passing data via props.

The assignment consists of two parts: the business card itself and a diagram of the component split.

## Materials

- [React.dev/learn - Your first component](https://react.dev/learn/your-first-component)
- [React.dev/learn - Importing and exporting components](https://react.dev/learn/importing-and-exporting-components)
- [React.dev/learn - Writing markup with JSX](https://react.dev/learn/writing-markup-with-jsx)
- [React.dev/learn - Javascript in JSX with curly braces](https://react.dev/learn/javascript-in-jsx-with-curly-braces)
- [React.dev/learn - Passing props to a component](https://react.dev/learn/passing-props-to-a-component)
- [React.dev/learn - Understanding Your UI as a tree](https://react.dev/learn/understanding-your-ui-as-a-tree)

## Example Solution

You can model your solution on the example below, but your own creativity (different layout, styles) is welcome.

[Example business card](business_card.png)

## Environment

Create a project using Vite: `npm create vite@latest my-business-card -- --template react-ts`.

## Requirements

### 1. Implementation

Design a business card containing:

- Profile picture, Name and Surname, Job Title
- Contact details (email, phone, website)
- "About me" section and Skills list

_Styling is up to you (make it aesthetic), data can be random as long as it is reasonably long._

### 2. Architecture

- **Decomposition**: Split the interface into smaller, logical components (each in a separate file, e.g., in `components/` folder).
- **Props**: Use props where they increase reusability or readability. Do not force them where not necessary.
- **Typing**: Define interfaces/types for props in TypeScript.
- **Cleanliness**: The main file (`App.tsx`) should contain a composition of components, not a "wall" of HTML.

### 3. Diagram

Create a simple diagram of the component tree (e.g., Paint, Excalidraw, piece of paper):

- **Vertices**: Component name + accepted props.
- **Edges**: Parent-child relationship.

_Be ready to justify your split during the class._

<details>
<summary>Hint: How many components?</summary>
The reference solution has about 10 components. Any logical, justified split (e.g., 7 or 12) is acceptable as long as it promotes readability and avoids duplication.
</details>
