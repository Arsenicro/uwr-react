# Task: Settings Dashboard — Base UI

Your task is to build a **Settings Dashboard** page using [Base UI](https://base-ui.com/) — a library of headless (unstyled) React components. The main educational goal of this task is to practice working with headless UI components and applying your own styles to them.

Base UI provides accessible, functional components with **zero default styles**. You are responsible for all visual styling.

[Example solution](example.png)

## Materials

- [Base UI — Handbook: Styling](https://base-ui.com/react/handbook/styling)
- [Base UI — Accordion](https://base-ui.com/react/components/accordion)
- [Base UI — Dialog](https://base-ui.com/react/components/dialog)
- [Base UI — Switch](https://base-ui.com/react/components/switch)
- [Base UI — Select](https://base-ui.com/react/components/select)
- [Base UI — Slider](https://base-ui.com/react/components/slider)
- [Base UI — Radio](https://base-ui.com/react/components/radio)
- [Base UI — Combobox](https://base-ui.com/react/components/combobox)
- [Base UI — Tooltip](https://base-ui.com/react/components/tooltip)
- [shadcn/ui](https://ui.shadcn.com/)

## Environment

Create a new project using Vite: `npm create vite@latest settings-dashboard -- --template react-ts`.

Install Base UI: `npm install @base-ui/react`.

Choose and install your preferred styling approach (e.g. Tailwind CSS, SCSS, Emotion, plain CSS).

Optionally, you may use [shadcn/ui](https://ui.shadcn.com/) which provides pre-styled Base UI component wrappers. This is **not required** — you can style Base UI components from scratch.

## Requirements

### 1. Implementation

Design a "Settings Dashboard" application that contains the following sections, each inside an **Accordion** panel:

- **Profile** — text inputs for name and email, a **Combobox** for skills/interests (with at least 10 predefined options that can be filtered by typing; the user can select multiple).
- **Notifications** — three **Switch** toggles (e.g. email notifications, push notifications, marketing emails) and a **Radio** group for digest frequency (e.g. instant / daily / weekly).
- **Appearance** — a **Select** dropdown for language and a **Slider** for font size.
- **Danger Zone** — a "Delete Account" button that opens a confirmation **Dialog** with Cancel and Confirm actions.

Additionally:

- Use **Tooltip** on at least two elements (e.g. info icons next to labels) to explain what a setting does.

### 2. Base UI Components

Your application must use the following Base UI components:

| Component     | Usage                                                                                             |
| ------------- | ------------------------------------------------------------------------------------------------- |
| **Accordion** | Collapsible panels for each settings section. Panels should animate open/close smoothly.          |
| **Switch**    | Toggle controls for boolean settings. Must show visual on/off state.                              |
| **Select**    | Dropdown for choosing from a fixed list (e.g. language). Must open a popup with selectable items. |
| **Slider**    | Range input (e.g. font size). Dragging must update the displayed value.                           |
| **Dialog**    | Modal confirmation for destructive actions. Must include a backdrop overlay.                      |
| **Radio**     | Radio group for single-choice settings (e.g. digest frequency). Must show selected indicator.     |
| **Combobox**  | Filterable multi-select (e.g. skills). Typing must filter the list of options.                    |
| **Tooltip**   | Hover hint on info icons or labels. Must appear/disappear on hover.                               |

### 3. Architecture

- **Styling**: Use any styling approach (Tailwind CSS, SCSS Modules, Emotion, CSS Modules, plain CSS, shadcn/ui). Do not use plain inline `style` attributes as the primary styling method. The Base UI documentation provides ready-made Tailwind and CSS Modules examples for every component — **do not copy them verbatim**. Use them as a starting point, then customize the styles to create your own cohesive visual design.
- **Components**: Each Base UI component wrapper (e.g. your styled Switch, Select, Slider, etc.) must live in its own file and be **reusable** — it should accept props so it can be used in different contexts without duplicating code. For example, a single `SettingsSwitch` component should be reused for every toggle in the app, not copy-pasted per usage.
- **TypeScript**: The code must be fully typed (no `any`).
