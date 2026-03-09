# Zadanie: Książka Kucharska (Recipe Book) (10p)

Twoim zadaniem jest stworzenie wyszukiwarki przepisów w React.js. Głównym celem edukacyjnym tego zadania jest ćwiczenie zarządzania bardziej złożonym stanem aplikacji, wykorzystując Context API oraz hook `useReducer`.

## Materiały

- [React.dev/learn - Extracting State Logic into a Reducer](https://react.dev/learn/extracting-state-logic-into-a-reducer)
- [React.dev/learn - Passing Data Deeply with Context](https://react.dev/learn/passing-data-deeply-with-context)
- [React.dev/learn - Scaling Up with Reducer and Context](https://react.dev/learn/scaling-up-with-reducer-and-context)

## Środowisko

Stwórz nowy projekt przy użyciu Vite: `npm create vite@latest my-recipe-book -- --template react-ts`.

## Wymagania

### 1. Implementacja

Zaprojektuj aplikację "Książka kucharska", która pozwala na:

- **Wyświetlanie przepisów**: Lista kafelków/elementów, z których każdy zawiera tytuł oraz treść przepisu.
- **Dodawanie przepisów**: Prosty formularz umożliwiający dodanie nowego przepisu do listy (tytuł + treść).
- **Zarządzanie przepisami**:
  - Usuwanie wybranego przepisu.
  - Oznaczanie przepisu jako "ulubiony" (powinno to być widoczne wizualnie).
- **Filtrowanie**:
  - Opcja wyświetlania tylko "ulubionych" przepisów (np. checkbox lub przełącznik).
  - Wyszukiwanie przepisów po słowie kluczowym (input tekstowy przeszukujący zarówno nazwę, jak i treść).
- **Style**: Aplikacja powinna posiadać podstawowe, estetyczne style (zdefiniowane np. w `App.css`).

### 2. Architektura

- **Context API + useReducer**:
  - Cała logika zarządzania stanem przepisów musi znajdować się w pliku `RecipeContext.tsx`.
  - Logika stanu powinna być zaimplementowana przy użyciu `useReducer`.
  - Komponent `RecipeProvider` powinien przyjmować `children` i udostępniać stan oraz funkcje modyfikujące (dispatch lub dedykowane funkcje) reszcie aplikacji.
- **Komponenty**: Podziel aplikację na mniejsze, czytelne komponenty
- **TypeScript**: Kod musi być w pełni otypowany (brak `any`).
