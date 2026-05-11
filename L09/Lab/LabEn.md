# Assignment: ToDo App with TanStack Query (10p)

This assignment is an extension of the ToDo app from Lab 08. The base feature set (CRUD) stays the same, but this time instead of manual `useEffect` + `useState` you will use **TanStack Query** for server state management. Additionally, you will add **filtering** of the task list.

The goal is to demonstrate why a dedicated server-state library is better than manual `useEffect` + `useState` — thanks to caching, filtering, and automatic refetching.

## Materials

- [TanStack Query — Overview](https://tanstack.com/query/latest/docs/framework/react/overview)
- [TanStack Query — Queries](https://tanstack.com/query/latest/docs/framework/react/guides/queries)
- [TanStack Query — Mutations](https://tanstack.com/query/latest/docs/framework/react/guides/mutations)
- [TanStack Query — Query Invalidation](https://tanstack.com/query/latest/docs/framework/react/guides/query-invalidation)
- [Effective React Query Keys](https://tkdodo.eu/blog/effective-react-query-keys)

## Environment

You build the frontend from scratch.

Backend is provided in [todo-server](./todo-server/).

Run backend:

1. npm install
2. npm start

API runs on http://localhost:3001.

Endpoints:

- GET /todos — all tasks
- GET /todos?done=true — only completed
- GET /todos?done=false — only active
- POST /todos
- PUT /todos/:id
- DELETE /todos/:id

## Requirements

### 1. Implementation

Implement a ToDo app with:

- listing tasks from API,
- adding a task,
- marking and unmarking a task as done,
- removing a task,
- **filtering** the list by task status — use the `done` query parameter.

### 2. TanStack Query

- Use **TanStack Query** (`@tanstack/react-query`) for fetching and mutating data.
- Fetch the task list using `useQuery`.
- Implement add, edit, and delete operations using `useMutation`.
- After a successful mutation, invalidate relevant queries (`queryClient.invalidateQueries`) so lists refresh automatically.

### 3. Reusability

- Make your hooks **reusable** — each operation (query, mutation) should have its own hook that can be easily used in any component.
- Query keys should be consistent and easy to reuse — don’t duplicate strings in multiple places. Read: [Effective React Query Keys](https://tkdodo.eu/blog/effective-react-query-keys)
- Avoid putting everything in a single file. Code should be organized so it’s easy to read and extend.

### 4. Query State Handling

- Use the states returned by TanStack Query (`isPending`, `isFetching`, `isError`, `error`) to display:
  - a **loading indicator** — when data is not yet available (`isPending`),
  - a **background refresh indicator** — when data is already visible but a refetch is in progress (`isFetching && !isPending`),
  - an **error message** — when a request fails (`isError`).
- This applies to both list fetching and mutations (add/edit/delete).
- The implementation does not have to be complex — simple text like "Loading...", "Refreshing..." and an error message is sufficient.

### 5. Styling

You can use any styling solution, including one not presented during this lecture.

If you choose a solution outside lecture material, the instructor may ask you to explain how it works and why you used it.

Visual polish (aesthetics, design) is **not** graded — don't focus on making it look fancy. However, the app must be readable and work correctly (e.g. elements must not overlap, the layout must not break).
