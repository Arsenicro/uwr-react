# Assignment: Theme Showcase - Tailwind CSS and Material UI (10 pts)

Your task is to build two alternative styling implementations for the same simple React application (`Theme Showcase`).

The base version is already prepared using a single CSS file. Your work is to recreate the same functionality and appearance in two approaches:

- Tailwind CSS,
- Material UI (MUI).

The main goal of this lab is to compare styling approaches: utility-first (Tailwind) vs component library (MUI).

## Materials

- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs/)
- [Tailwind CSS – Adding custom variants](https://tailwindcss.com/docs/adding-custom-styles#adding-custom-variants)
- [Tailwind CSS – Dark mode](https://tailwindcss.com/docs/dark-mode)
- [Material UI Documentation](https://mui.com/material-ui/getting-started/)
- [MUI Theming](https://mui.com/material-ui/customization/theming/)

## Environment

Work in the [provided project (Vite + React + TypeScript)](./theme-showcase/).

> **Note:** If your IDE reports TypeScript errors or runs very slowly, it may be struggling to handle both Tailwind CSS and MUI in a single project. If you encounter problems, you can split the project into two versions (one with Tailwind, one with MUI) — the IDE should handle either of them fine on its own.

- the base CSS version is located in `src/components/` and uses `styles.css`,
- entry points for the other versions:
  - `src/componentsTailwind/AppTailwind.tsx`,
  - `src/componentsMui/AppMui.tsx`,
- implementation switching is done in `src/App.tsx`.

## Requirements

### 1. General Requirements

- Treat the base version (`src/components/` + `styles.css`) as the reference.
- Do not modify base-version files (`src/components/`).
- The MUI and Tailwind versions **do not need to** look identical to the base version, but should be fairly close.

### 2. Tailwind CSS Implementation (5 pts)

Implement the Tailwind version in `src/componentsTailwind/`.

Requirements:

- use Tailwind v4 utility classes directly in JSX,
- support three themes (light / dark / midnight) using **custom variants** (`@custom-variant`),
- use Tailwind color classes (e.g. `bg-white`, `bg-slate-800`) with theme variants (e.g. `dark:bg-slate-800 midnight:bg-[#261838]`),
- do not create a traditional stylesheet — the only CSS file should contain `@import "tailwindcss"`, `@custom-variant` declarations and, if you consider it necessary, variables with custom colors,
- implement **color-coded chips in SkillsCard** — each category (language, framework, tool, soft) should have a different background, text, and border color,
- the theme switcher (`<select>`) must work the same way as in the base version.

You may design the component and file structure on your own.

### 3. Material UI Implementation (5 pts)

Implement the MUI version in `src/componentsMui/`.

Requirements:

- use MUI components (`Box`, `Card`, `Typography`, `Chip`, `Select` / `MenuItem`, `Stack`, `Avatar`, etc.),
- use `ThemeProvider` and `createTheme` to define three themes (light / dark / midnight),
- use the `sx` prop for style overrides when needed,
- do not create a separate CSS file — use `CssBaseline` for the global reset,
- implement **color-coded chips in SkillsCard** — each category should have its own colors, set via `sx`,
- implement an **Edit Profile dialog** using MUI components: `Dialog`, `DialogTitle`, `DialogContent`, `DialogActions`, `TextField`, `Switch`, `Button` — add an **Edit** button to the profile card,
- editable fields: name, description, and skills,
- use `Autocomplete` (with `multiple`) for the skill multi-select in the dialog.

> **Note:** As stated above, the Edit Profile dialog must be implemented **only** in the MUI version.

You may design the component and file structure on your own.
