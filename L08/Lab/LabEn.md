# Assignment: ToDo App with API (10p)

Your task is to build a simple ToDo app in React.js that communicates with an API.

## Materials

- [Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)
- [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect)

## Notes

- Visual style (aesthetics, design) will **not** be a grading factor, but the app should look clean and readable.
- Your solution does **not** have to be as complex as the "final solution" shown during the lecture — focus on meeting the requirements above.
- Keep it simple and functional.

## Environment

You build the frontend from scratch.

Backend is provided in [todo-server](./todo-server/).

Run backend:

1. npm install
2. npm start

API runs on http://localhost:3001.

Endpoints:

- GET /todos
- POST /todos
- PUT /todos/:id
- DELETE /todos/:id

## Requirements

### 1. Implementation

Implement a ToDo app with:

- listing tasks from API,
- adding a task,
- marking and unmarking a task as done,
- removing a task.

### 2. Architecture

- Keep list state in a parent component or a custom hook.
- Put HTTP communication in a separate file, e.g. src/api.ts.
- Use TypeScript and your own Todo type.
- Split UI into clear, readable components.

### 3. Error Handling & Loading Indicators

- When an API request is in progress (fetching, adding, toggling, deleting), show a loading indicator to the user.
- When an API request fails, display an error message to the user.
- This applies to both list loading and individual operations (add/edit/delete).
- The implementation does not have to be overly complex — a simple spinner or "Loading..." text and an error message is sufficient.

### 4. Styling

You can use any styling solution, including one not presented during this lecture.

If you choose a solution outside lecture material, the instructor may ask you to explain how it works and why you used it.
