# Assignment: ToDo App with Next.js (10p)

Your task is to build a simple **ToDo app** using **Next.js (App Router)** that communicates with an external API — the same one from Labs 08 and 09.

The main learning goal is the **Server Component / Client Component split**, file-based routing, fetching data on the server, and mutating data with **Server Actions**. This is not about building a backend in Next.js or using TanStack Query.

## Materials

- [Next.js — App Router](https://nextjs.org/docs/app)
- [Next.js — Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components)
- [Next.js — Fetching Data](https://nextjs.org/docs/app/getting-started/fetching-data)
- [Next.js — Mutating Data](https://nextjs.org/docs/app/getting-started/mutating-data)

## Notes

- Visual style (aesthetics, design) will **not** be a grading factor, but the app should look clean and readable.
- Your solution does **not** have to be as complex as the "final solution" shown during the lecture — focus on meeting the requirements above.
- Use the **App Router** (`app/` directory), not the legacy Pages Router.
- Keep it simple and functional.

## Environment

Create a new Next.js project with TypeScript:

```bash
npx create-next-app@latest my-todo-next --typescript --app --eslint --tailwind
```

Backend is provided in [todo-server](./todo-server/).

Run backend:

1. npm install
2. npm start

API runs on http://localhost:3001

Endpoints:

- GET /todos — all tasks
- GET /todos?done=true — only completed
- GET /todos?done=false — only active
- GET /todos/:id — single task
- POST /todos
- PUT /todos/:id
- DELETE /todos/:id

## Requirements

### 1. Implementation

Implement a ToDo app with these views:

- `/` — home page with a short description,
- `/todos` — list of tasks from the API,
- `/todos/new` — form for adding a task,
- `/todos/[id]` — task details,
- `/todos/[id]/edit` — form for editing a task.

The app should support:

- listing tasks from the API,
- filtering the list by status (all / active / completed) using the `done` query parameter,
- showing a loading state when switching between filters,
- adding a task,
- editing a task (text and done status),
- navigation between views using Next.js `<Link>`.

Home and the task list must always be visible in a top navigation bar. The active link in the navigation should be visually highlighted. Every view must be reachable by URL

### 2. Server and Client Components

- Fetch data for the list, details, and edit pages in **Server Components** using `fetch` — do not use `useEffect` for initial loading on these pages.
- On `/todos`, read the `done` search param and fetch the matching list from the API.
- When the user switches filters, show a loading indicator while the new list is being fetched (for example with a `Suspense` boundary around the list).
- Put forms and other interactive UI in **Client Components** (`"use client"`).
- On the edit page, fetch the task on the server and pass it to a form so the fields are prefilled.
- If a task does not exist, call `notFound()` and provide a `not-found.tsx` page for `/todos/[id]`.

### 3. Server Actions

- Implement **create** and **update** using **Server Actions** (`"use server"`), not client-side `fetch` in `onSubmit`.
- Connect forms with the `action` prop, for example `<form action={createTodo}>`.
- Call the external API from the Server Action (the request runs on the Next.js server).
- After a successful mutation, call `revalidatePath('/todos')` and then `redirect(...)` to send the user back to the list or details page.
- While a form is submitting, disable its inputs and submit button.

### 4. Architecture

- Split UI into clear, readable components instead of putting everything in one file.

### 5. Error Handling & Loading Indicators

- Show a loading indicator while data is being fetched (for example `loading.tsx` on `/todos`).
- When switching filters on `/todos`, show a loading indicator until the filtered list is ready — do not leave the old list on screen with no feedback.
- Show an error message when a request fails.
- This applies to both page loading and form submissions.
- Simple text like "Loading..." and an error message is sufficient.

### 6. Styling

You can use any styling solution, including one not presented during this lecture.

If you choose a solution outside lecture material, the instructor may ask you to explain how it works and why you used it.

Visual polish (aesthetics, design) is **not** graded — don't focus on making it look fancy. However, the app must be readable and work correctly (e.g. elements must not overlap, the layout must not break).
