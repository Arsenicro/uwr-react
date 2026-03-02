# Zadanie: Lista zadań (ToDo List) (10p)

Twoim zadaniem jest stworzenie klasycznej listy zadań (ToDo) w React.js. Głównym celem edukacyjnym tego zadania jest ćwiczenie renderowania list, obsługi zdarzeń interakcji z użytkownikiem oraz zarządzania stanem aplikacji.

## Materiały

- [React.dev/learn - Conditional Rendering](https://react.dev/learn/conditional-rendering)
- [React.dev/learn - Rendering Lists](https://react.dev/learn/rendering-lists)
- [React.dev/learn - Responding to events](https://react.dev/learn/responding-to-events)
- [React.dev/learn - State: A component's memory](https://react.dev/learn/state-a-components-memory)
- [React.dev/learn - State as Snapshot](https://react.dev/learn/state-as-a-snapshot)
- [React.dev/learn - Update Objects in State](https://react.dev/learn/updating-objects-in-state)
- [React.dev/learn - Update Arrays in State](https://react.dev/learn/updating-arrays-in-state)

## Środowisko

Stwórz nowy projekt przy użyciu Vite: `npm create vite@latest my-todo-list -- --template react-ts`.

## Wymagania

### 1. Implementacja

Zaprojektuj aplikację ToDo List, która pozwola na:

- **Dodawanie zadań**: Formularz umożliwiający wpisanie treści i dodanie nowego elementu do listy.
- **Interakcję z zadaniami**:
  - Oznaczanie zadań jako "zrobione" (powinno to być widoczne wizualnie, np. przekreślenie lub wyszarzenie).
  - Usuwanie zadań z listy.
- **Filtrowanie**:
  - Możliwość ukrycia/pokazania zadań zakończonych (przełącznik "Pokaż tylko aktywne" lub podobny).
  - Wyszukiwanie zadań po nazwie (pole tekstowe filtrujące listę w czasie rzeczywistym).
- **Style**: Aplikacja powinna posiadać podstawowe, estetyczne style (zdefiniowane np. w `App.css`).

### 2. Architektura

- **Dekompozycja**: Podziel interfejs na mniejsze komponenty (np. `TodoItem`, `TodoForm`, `FilterBar`).
- **Zarządzanie stanem**: Stan listy zadań powinien znajdować się w odpowiednim komponencie-rodzicu, tak aby umożliwić komunikację między formularzem, filtrami a listą.
- **Klucze (Keys)**: Pamiętaj o używaniu unikalnych kluczy przy renderowaniu list.

### 3. Diagram

Stwórz prosty schemat drzewa komponentów (np. Paint, Excalidraw, kartka papieru):

- **Wierzchołki**: Nazwa komponentu + jaki stan przetrzymuje lub jakie propsy przyjmuje.
- **Krawędzie**: Relacja rodzic-dziecko.

_Bądź gotów uzasadnić, gdzie trzymasz stan aplikacji i dlaczego._

<details>
<summary>Podpowiedź: Jak zacząć?</summary>
Zacznij od zdefiniowania struktury danych dla pojedynczego zadania (np. <code>interface Todo { id: string; text: string; done: boolean; }</code>). Następnie stwórz tablicę takich obiektów w stanie komponentu <code>App</code> i wyświetl ją używając <code>.map()</code>.
</details>
