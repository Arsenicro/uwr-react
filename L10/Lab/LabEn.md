# Assignment: Book Library and Routing (10p)

Your task is to build a simple **Book Library** app where the main learning goal is routing using React Router. The data should be mostly static, and the application logic should stay intentionally lightweight, focused on navigation and URL state.

This assignment is not about backend integration or advanced state management. The key topics are multiple views, route params, search params, and basic component reusability.

## Materials

- [React Router — Main Concepts](https://reactrouter.com/start/framework/main-concepts)
- [React Router — Route Params](https://reactrouter.com/start/framework/routing#dynamic-segments)
- [React Router — Search Params](https://reactrouter.com/start/framework/navigating#search-params)
- [React Router — Navigate](https://reactrouter.com/api/components/Navigate)
- [React Router — Outlet](https://reactrouter.com/api/components/Outlet)

## Environment

Build the frontend yourself using React + TypeScript.

Do not use a backend. Keep the book data locally, for example in `src/data/books.ts` or in a JSON file imported into the app.

You may start from a new Vite project.

## Requirements

### 1. Implementation

Implement a **Book Library** app that includes:

- a home page with a short description, and basic information about the library,
- a book catalogue page with a list of books and filters,
- a single book page showing book details,
- an admin area/panel for managing books.

Detailed requirements:

- home and catalogue must always be visible in a top navigation bar,
- the catalogue must use URL search params such as `query` and `sort`, and restore them after refresh,
- catalogue filters must include simple search and sorting,
- each book in the catalogue must link to its details view,
- the book id should be present in the details view URL,
- every app view should be directly reachable by URL,
- the admin area must support book management, at minimum: create and edit,
- admin features (links, buttons, forms, routes) must be visible and accessible only to users with the `admin` role,
- a user with the `guest` role can browse data, but must not see or use administrative actions.

Full authentication is not required (no login, passwords, tokens, or backend access control). For this assignment, a simple frontend role model is enough.

### 2. Routing

- Use routing to handle all views.
- Use **route params** for a single book, for example `/books/:bookId`.
- Use **search params** for catalogue filters.
- Provide a shared layout with navigation and a place for rendering nested pages.
- Implement **nested layouts**: one main app layout (for example: header + footer + page outlet) and an additional nested layout for the admin section, with local admin navigation (for example: book list / new book).

### 3. User Role

- Keep the user role state (`admin` / `guest`) in any approach you choose.
- Show or hide buttons, links, and forms based on that role.
- Changing the role should immediately affect which UI controls are visible.
- The role storage method is flexible (for example: Context, localStorage, component state, or a state management library).
- Persisting the role after page refresh (for example with localStorage) is optional.

### 4. Architecture

- Keep the code split into clear files and components instead of placing everything in one place.
- Use a simple and logical structure: layout, pages, shared components, data.
- Use TypeScript and your own types for books, filters, and the user role.
- Keep the logic simple and avoid extra features that are not needed for navigation and views.

### 5. Styling

You can use any styling solution, including one not presented during this lecture.

If you choose a solution outside lecture material, the instructor may ask you to explain how it works and why you used it.

Visual polish is not the main focus, but the app must stay readable, consistent, and work correctly on different screen sizes.
