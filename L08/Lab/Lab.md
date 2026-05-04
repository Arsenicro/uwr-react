# Zadanie: ToDo App z API (10p)

Twoim zadaniem jest stworzenie prostej aplikacji ToDo w React.js, komunikującej się z API.

## Materiały

- [Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)
- [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect)

## Uwagi

- Styl wizualny (estetyka, design) **nie** będzie czynnikiem oceny, ale aplikacja powinna wyglądać czytelnie i estetycznie.
- Twoje rozwiązanie **nie** musi być tak złożone jak "finalne rozwiązanie" pokazane na wykładzie — skup się na spełnieniu powyższych wymagań.
- Prostota i funkcjonalność wystarczą.

## Środowisko

Frontend tworzysz samodzielnie.

Backend znajdziesz w [todo-server](./todo-server/).

Uruchomienie backendu:

1. npm install
2. npm start

API działa na http://localhost:3001.

Endpointy:

- GET /todos
- POST /todos
- PUT /todos/:id
- DELETE /todos/:id

## Wymagania

### 1. Implementacja

Zaimplementuj aplikację ToDo, która umożliwia:

- wyświetlanie listy zadań z API,
- dodawanie zadania,
- oznaczanie i odznaczanie zadania jako done,
- usuwanie zadania.

### 2. Architektura

- Stan listy trzymaj w komponencie nadrzędnym lub we własnym hooku.
- Komunikację HTTP umieść w osobnym pliku, np. src/api.ts.
- Użyj TypeScript i własnego typu Todo.
- Podziel UI na czytelne komponenty.

### 3. Obsługa błędów i wskaźniki ładowania

- Gdy trwa zapytanie do API (pobieranie, dodawanie, przełączanie, usuwanie), pokaż użytkownikowi wskaźnik ładowania.
- Gdy zapytanie do API się nie powiedzie, wyświetl użytkownikowi komunikat o błędzie.
- Dotyczy to zarówno ładowania listy, jak i pojedynczych operacji (dodawanie/edycja/usuwanie).
- Implementacja nie musi być skomplikowana — wystarczy prosty spinner lub tekst "Ładowanie..." i komunikat o błędzie.

### 4. Stylowanie

Możesz użyć dowolnego rozwiązania do stylowania, także takiego, którego nie było na wykładzie.

Jeśli wybierzesz rozwiązanie spoza materiału z wykładu, prowadzący może poprosić Cię o wyjaśnienie, jak działa i dlaczego go użyłeś.
