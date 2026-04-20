# Zadanie: Theme Showcase - Tailwind CSS i Material UI (10p)

Twoim zadaniem jest wykonanie dwóch alternatywnych implementacji stylowania dla tej samej, prostej aplikacji React (`Theme Showcase`).

Wersja bazowa jest przygotowana w oparciu o pojedynczy plik CSS. Twoja praca polega na odtworzeniu tej samej funkcjonalności i wyglądu w dwóch podejściach:

- Tailwind CSS,
- Material UI (MUI).

Głównym celem laboratorium jest porównanie podejść do stylowania: utility-first (Tailwind) vs biblioteka komponentów (MUI).

## Materiały

- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs/)
- [Tailwind CSS – Adding custom variants](https://tailwindcss.com/docs/adding-custom-styles#adding-custom-variants)
- [Tailwind CSS – Dark mode](https://tailwindcss.com/docs/dark-mode)
- [Material UI Documentation](https://mui.com/material-ui/getting-started/)
- [MUI Theming](https://mui.com/material-ui/customization/theming/)

## Środowisko

Pracuj na [dostarczonym projekcie (Vite + React + TypeScript)](./theme-showcase/).

> **Uwaga:** Jeśli IDE zgłasza błędy TypeScript lub działa bardzo wolno, może to wynikać z jednoczesnej obsługi zarówno Tailwind CSS, jak i MUI w jednym projekcie. W razie problemów można rozdzielić projekt na dwie wersje (jedną z Tailwind, drugą z MUI) — IDE powinno bez problemu obsłużyć każde z nich osobno.

- wersja bazowa (CSS) znajduje się w `src/components/` i używa `styles.css`,
- punkty wejścia dla pozostałych wersji:
  - `src/componentsTailwind/AppTailwind.tsx`,
  - `src/componentsMui/AppMui.tsx`,
- przełączanie implementacji odbywa się w `src/App.tsx`.

## Wymagania

### 1. Wymagania ogólne

- Traktuj wersję bazową (`src/components/` + `styles.css`) jako punkt odniesienia.
- Nie modyfikuj plików wersji bazowej (`src/components/`).
- Wersje MUI oraz Tailwind **nie muszą** wyglądać identycznie z wersją bazową, powinny być do niej jednak dość zbliżone.

### 2. Implementacja Tailwind CSS (5p)

Wersję Tailwind zaimplementuj w folderze `src/componentsTailwind/`.

Wymagania:

- używaj klas narzędziowych Tailwind v4 bezpośrednio w JSX,
- obsłuż trzy motywy (light / dark / midnight) za pomocą **custom variants** (`@custom-variant`),
- używaj klas kolorów Tailwinda (np. `bg-white`, `bg-slate-800`) z wariantami motywów (np. `dark:bg-slate-800 midnight:bg-[#261838]`),
- nie twórz tradycyjnego arkusza stylów — jedyny plik CSS powinien zawierać `@import "tailwindcss"`, deklaracje `@custom-variant` i, jeśli uznasz, że to niezbędne, zmienne z własnymi kolorami,
- zaimplementuj **kolorowe chipy w SkillsCard** — każda kategoria (language, framework, tool, soft) powinna mieć inny kolor tła, tekstu i obramowania,
- przełącznik motywu (`<select>`) musi działać tak samo jak w wersji bazowej.

Strukturę komponentów i plików możesz zaprojektować samodzielnie.

### 3. Implementacja Material UI (5p)

Wersję MUI zaimplementuj w folderze `src/componentsMui/`.

Wymagania:

- używaj komponentów MUI (`Box`, `Card`, `Typography`, `Chip`, `Select` / `MenuItem`, `Stack`, `Avatar` itp.),
- użyj `ThemeProvider` i `createTheme` do zdefiniowania trzech motywów (light / dark / midnight),
- używaj propsa `sx` do nadpisywania stylów, gdy to potrzebne,
- nie twórz osobnego pliku CSS — do resetu globalnego użyj `CssBaseline`,
- zaimplementuj **kolorowe chipy w SkillsCard** — każda kategoria powinna mieć własne kolory, ustawione przez `sx`,
- zaimplementuj **dialog edycji profilu** z komponentami MUI: `Dialog`, `DialogTitle`, `DialogContent`, `DialogActions`, `TextField`, `Switch`, `Button` — dodaj przycisk **Edit** do karty profilu,
- edytować można: imię i nazwisko, opis oraz umiejętności,
- użyj `Autocomplete` (z `multiple`) do multi-selectu umiejętności w dialogu.

> **Uwaga:** Tak jak napisano wyżej, w wersji MUI należy dodatkowo zaimplementować dialog edycji profilu. Należy to zrobić **wyłącznie** w wersji MUI

Strukturę komponentów i plików możesz zaprojektować samodzielnie.
