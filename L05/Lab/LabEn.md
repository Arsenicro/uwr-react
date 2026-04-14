# Assignment: Theme Showcase - SCSS Modules and Emotion (10 pts)

Your task is to build two alternative styling implementations for the same simple React application (Theme Showcase).

The base version is already prepared using a single CSS file. Your work is to recreate the same behavior and visual result in two approaches:

- SCSS Modules,
- CSS-in-JS (Emotion).

The main goal of this lab is to compare styling approaches, not to expand application logic.

## Materials

- [Sass Documentation](https://sass-lang.com/documentation/)
- [Emotion](https://emotion.sh/docs/introduction)

## Environment

Work in the [provided project (Vite + React + TypeScript)](./theme-showcase/).

- the base CSS version is located in `src/components/` and uses `styles.css`,
- entry points for the other implementations are:
  - `src/componentsScss/AppScss.tsx`,
  - `src/componentsCssInJs/AppCssInJs.tsx`,
- implementation switching is done in `src/App.tsx`.

## Requirements

### 1. General Requirements

- Treat the base version (`src/components/` + `styles.css`) as the reference.
- SCSS and Emotion versions must preserve the same behavior and visual result as the base version.
- Do not modify base-version files (`src/components/`).
- Make changes only in:
  - `src/componentsScss/`,
  - `src/componentsCssInJs/`.
- The only allowed exception is `src/App.tsx` (switching between implementations).

### 2. SCSS Modules Implementation

Implement the SCSS version in `src/componentsScss/`.

Required SCSS elements:

- variables,
- at least one mixin,
- at least one map and real map usage in styles,
- meaningful nesting.

You may design the component and file structure on your own.

<details>
<summary>💡 Hint: generating a CSS property for each theme</summary>

```scss
@mixin themed($prop, $token) {
  @each $name, $palette in t.$themes {
    :global(.theme-#{$name}) & {
      #{$prop}: map.get($palette, $token);
    }
  }
}
```

</details>

### 3. CSS-in-JS Implementation (Emotion)

Implement the Emotion version in `src/componentsCssInJs/`.

Requirements:

- use `@emotion/styled`,
- use `ThemeProvider` and light/dark/midnight theme tokens,
- do not create a separate CSS file for this version: for global styles, use Emotion's Global component.

You may design the component and file structure on your own.

<details>
<summary>💡 Hint: TypeScript and Emotion's theme</summary>

[`L05/Lecture/playground-05/src/componentsCssInJs/emotion.d.ts`](../Lecture/playground-05/src/componentsCssInJs/emotion.d.ts)

</details>
