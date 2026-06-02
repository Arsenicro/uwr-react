# Assignment: Recipe Box — Testing (10p)

Your task is to write tests for a ready-made **Recipe Box** app in React.js. The application is already implemented — you do **not** rebuild it.

## Materials

- [Vitest](https://vitest.dev/)
- [Vitest — Component Testing](https://vitest.dev/guide/browser/component-testing)
- [vitest-browser-react](https://github.com/vitest-dev/vitest-browser-react)
- [Playwright — Getting Started](https://playwright.dev/docs/intro)

## Notes

- The starter app is complete and should work after `npm install` and `npm run dev`.
- **Do not modify application code** unless it is strictly necessary for testing (for example missing `aria-label`, or a bug that blocks a test)
- All tests should be runnable from the command line (for example via npm scripts).
- Separate **unit** tests (Node) from **browser** tests (Vitest Browser Mode), for example with file naming (`*.test.ts` vs `*.browser.test.tsx`) and Vitest `projects`.

## Environment

Starter project: [recipe-box](./recipe-box/).

```bash
cd recipe-box
npm install
```

The app runs on http://localhost:5173.

Keep e2e tests in the `e2e/` folder.

## Requirements

### 1. Tests you must implement

You only need **three** test areas. Keep each one small and readable.

#### Unit test — `recipeReducer`

Write unit tests for **`recipeReducer`** in `src/lib/`

Adding a recipe uses **`getRandomUUID()`** — mock it in your unit tests (for example with `vi.mock`) and return a fixed UUID so assertions stay predictable.

#### Browser test — `RecipeForm`

Write browser test with `vitest-browser-react` for **`RecipeForm`**.

Render the form inside **`RecipeProvider`** (same pattern as the lecture app). Check behavior from the user's perspective — for example: submit an empty form and assert a validation error appears; or fill in the fields, submit, and assert the recipe shows up when you also render **`RecipeList`** (with `initialRecipes={[]}`).

Do not test implementation details (internal state, CSS classes unless they carry meaning for the user).

#### End-to-end test — main flow (Playwright)

Write Playwright spec for the standard user flow

Configure Playwright so running e2e tests from the command line starts the dev server automatically (for example with `webServer` in config).

### 2. Test coverage plan (document only)

In addition to the tests above, **analyze the rest of the app** and decide what _could_ be tested and **which test type** would fit each part.

Write this up in **[`recipe-box/TEST_PLAN.md`](./recipe-box/TEST_PLAN.md)**. You do not need to follow a strict template. For each area you mention, briefly note what you would test, which test type fits best (**unit**, **browser**, or **e2e**), and why that choice makes sense. You may also note whether you actually implemented a test for it in this lab.

You do **not** have to implement everything in the plan — the point is to think about coverage, not to write every possible test.

### 3. Project setup

- Set up the project so unit tests, browser tests, and e2e tests can each be run separately from the command line.
- Keep TypeScript — no `any` in your test files.
- Tests should be readable: clear `describe` / `it` names, arrange–act–assert structure.
