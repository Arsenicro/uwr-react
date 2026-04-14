# Zadanie: Theme Showcase - SCSS Modules i Emotion (10p)

Twoim zadaniem jest wykonanie dwóch alternatywnych implementacji stylowania dla tej samej, prostej aplikacji React (`Theme Showcase`).

Wersja bazowa jest przygotowana w oparciu o pojedynczy plik CSS. Twoja praca polega na odtworzeniu tej samej funkcjonalności i wyglądu w dwóch podejściach:

- SCSS Modules,
- CSS-in-JS (Emotion).

Głównym celem laboratorium jest porównanie podejść do stylowania, a nie rozbudowa logiki aplikacji.

## Materiały

- [Sass Documentation](https://sass-lang.com/documentation/)
- [Emotion](https://emotion.sh/docs/introduction)

## Środowisko

Pracuj na [dostarczonym projekcie (Vite + React + TypeScript)](./theme-showcase/).

- wersja bazowa (CSS) znajduje się w `src/components/` i używa `styles.css`,
- punkty wejścia dla pozostałych wersji:
  - `src/componentsScss/AppScss.tsx`,
  - `src/componentsCssInJs/AppCssInJs.tsx`,
- przełączanie implementacji odbywa się w `src/App.tsx`.

## Wymagania

### 1. Wymagania ogólne

- Traktuj wersję bazową (`src/components/` + `styles.css`) jako punkt odniesienia.
- Wersje SCSS i Emotion mają zachowywać tę samą funkcjonalność i ten sam wygląd co wersja bazowa.
- Nie modyfikuj plików wersji bazowej (`src/components/`).
- Modyfikacje wykonuj wyłącznie w:
  - `src/componentsScss/`,
  - `src/componentsCssInJs/`.
- Jedyny dopuszczalny wyjątek: `src/App.tsx` (przełączanie pomiędzy implementacjami).

### 2. Implementacja SCSS Modules

Wersję SCSS zaimplementuj w folderze `src/componentsScss/`.

Wymagane elementy SCSS:

- zmienne,
- co najmniej jeden mixin,
- co najmniej jedna mapa (`map`) i jej realne użycie w stylach,
- sensowne użycie zagnieżdżania.

Strukturę komponentów i plików możesz zaprojektować samodzielnie.

<details>
<summary>💡 Podpowiedź: generowanie właściwości CSS dla każdego motywu</summary>

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

### 3. Implementacja CSS-in-JS (Emotion)

Wersję Emotion zaimplementuj w folderze `src/componentsCssInJs/`.

Wymagania:

- użyj `@emotion/styled`,
- użyj `ThemeProvider` i tokenów motywu light/dark/midnight,
- nie twórz osobnego pliku CSS dla tej wersji: do stylów globalnych użyj komponentu Global z emotion

Strukturę komponentów i plików możesz zaprojektować samodzielnie.

<details>
<summary>💡 Podpowiedź: TypeScript i motyw Emotion</summary>

[`L05/Lecture/playground-05/src/componentsCssInJs/emotion.d.ts`](../Lecture/playground-05/src/componentsCssInJs/emotion.d.ts)

</details>
