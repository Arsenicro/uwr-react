# Assignment: ToDo List (10p)

Your task is to create a classic ToDo list in React.js. The main educational goal of this assignment is to practice list rendering, handling user interaction events, and managing application state.

## Materials

- [React.dev/learn - Conditional Rendering](https://react.dev/learn/conditional-rendering)
- [React.dev/learn - Rendering Lists](https://react.dev/learn/rendering-lists)
- [React.dev/learn - Responding to events](https://react.dev/learn/responding-to-events)
- [React.dev/learn - State: A component's memory](https://react.dev/learn/state-a-components-memory)
- [React.dev/learn - State as Snapshot](https://react.dev/learn/state-as-a-snapshot)
- [React.dev/learn - Update Objects in State](https://react.dev/learn/updating-objects-in-state)
- [React.dev/learn - Update Arrays in State](https://react.dev/learn/updating-arrays-in-state)

## Environment

Create a new project using Vite: `npm create vite@latest my-todo-list -- --template react-ts`.

## Requirements

### 1. Implementation

Design a ToDo List application that allows:

- **Adding tasks**: A form enabling text entry and adding a new item to the list.
- **Interacting with tasks**:
  - Marking tasks as "done" (this should be visually apparent, e.g., strikethrough or grayed out).
  - Removing tasks from the list.
- **Filtering**:
  - Ability to hide/show completed tasks (toggle "Show active only" or similar).
  - Searching tasks by name (text field filtering the list in real-time).
- **Styles**: The application should have basic, aesthetic styles (defined e.g., in `App.css`).

### 2. Architecture

- **Decomposition**: Divide the interface into smaller components (e.g., `TodoItem`, `TodoForm`, `FilterBar`).
- **State Management**: The task list state should reside in the appropriate parent component to enable communication between the form, filters, and the list.
- **Keys**: Remember to use unique keys when rendering lists.

### 3. Diagram

Create a simple specific component tree schema (e.g., Paint, Excalidraw, piece of paper):

- **Nodes**: Component name + what state it holds or what props it receives.
- **Edges**: Parent-child relationship.

_Be ready to justify where you keep the application state and why._

<details>
<summary>Hint: How to start?</summary>
Start by defining the data structure for a single task (e.g., <code>interface Todo { id: string; text: string; done: boolean; }</code>). Then create an array of such objects in the <code>App</code> component state and display it using <code>.map()</code>.
</details>
