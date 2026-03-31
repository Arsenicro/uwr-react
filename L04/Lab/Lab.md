# Zadanie: Książka Kucharska (Recipe Book) - Zustand (10p)

Twoim zadaniem jest stworzenie (lub przepisanie) wyszukiwarki przepisów w React.js. **To zadanie polega na wykonaniu tej samej aplikacji co w poprzedniej pracowni, ale przy użyciu biblioteki Zustand, co pozwoli na porównanie obu podejść do zarządzania stanem.** Głównym celem edukacyjnym tego zadania jest ćwiczenie zarządzania bardziej złożonym stanem aplikacji, wykorzystując bibliotekę **Zustand**.

## Materiały

- [Zustand Documentation](https://zustand.docs.pmnd.rs/learn/getting-started/introduction)

## Środowisko

Stwórz nowy projekt przy użyciu Vite: `npm create vite@latest my-recipe-book-zustand -- --template react-ts`.
Zainstaluj bibliotekę Zustand: `npm install zustand`.

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

- **Zustand**:
  - Cała logika zarządzania stanem przepisów musi zostać przeniesiona do store'a Zustand (np. w pliku `store.ts` lub `useRecipeStore.ts`).
  - Store powinien udostępniać stan (lista przepisów, ew. filtry) oraz akcje (dodawanie, usuwanie, toggle favorite).
  - Komponenty powinny korzystać z hooka wygenerowanego przez `create` z biblioteki Zustand.
- **Komponenty**: Podziel aplikację na mniejsze, czytelne komponenty.
- **TypeScript**: Kod musi być w pełni otypowany (brak `any`).
