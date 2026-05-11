# Zadanie: ToDo App z TanStack Query (10p)

To zadanie jest rozszerzeniem aplikacji ToDo z Lab 08. Bazowy zestaw funkcji (CRUD) pozostaje taki sam, ale tym razem zamiast ręcznych `useEffect` + `useState` użyjesz **TanStack Query** do zarządzania stanem serwerowym. Dodatkowo dodasz **filtrowanie** listy zadań.

Celem zadania jest pokazanie, dlaczego dedykowana biblioteka do stanu serwerowego jest lepsza niż ręczne `useEffect` + `useState` — dzięki cache'owaniu, filtrowaniu i automatycznemu odświeżaniu.

## Materiały

- [TanStack Query — Overview](https://tanstack.com/query/latest/docs/framework/react/overview)
- [TanStack Query — Queries](https://tanstack.com/query/latest/docs/framework/react/guides/queries)
- [TanStack Query — Mutations](https://tanstack.com/query/latest/docs/framework/react/guides/mutations)
- [TanStack Query — Query Invalidation](https://tanstack.com/query/latest/docs/framework/react/guides/query-invalidation)
- [Effective React Query Keys](https://tkdodo.eu/blog/effective-react-query-keys)

## Środowisko

Frontend tworzysz samodzielnie.

Backend znajdziesz w [todo-server](./todo-server/).

Uruchomienie backendu:

1. npm install
2. npm start

API działa na http://localhost:3001.

Endpointy:

- GET /todos — lista wszystkich zadań
- GET /todos?done=true — tylko ukończone
- GET /todos?done=false — tylko nieukończone
- POST /todos
- PUT /todos/:id
- DELETE /todos/:id

## Wymagania

### 1. Implementacja

Zaimplementuj aplikację ToDo, która umożliwia:

- wyświetlanie listy zadań z API,
- dodawanie zadania,
- oznaczanie i odznaczanie zadania jako done,
- usuwanie zadania,
- **filtrowanie** listy po statusie zadania — wykorzystaj parametr `done` w zapytaniu do API.

### 2. TanStack Query

- Użyj **TanStack Query** (`@tanstack/react-query`) do pobierania i mutowania danych.
- Pobieranie listy zadań zaimplementuj za pomocą `useQuery`.
- Operacje dodawania, edycji i usuwania zaimplementuj za pomocą `useMutation`.
- Po udanej mutacji unieważnij odpowiednie queries (`queryClient.invalidateQueries`), aby listy odświeżyły się automatycznie.

### 3. Reużywalność

- Zadbaj o to, żeby hooki były **reużywalne** — każda operacja (query, mutacja) powinna mieć swój własny hook, który można łatwo użyć w dowolnym komponencie.
- Klucze zapytań (query keys) powinny być spójne i łatwe do ponownego użycia — nie duplikuj stringów w wielu miejscach. Przeczytaj: [Effective React Query Keys](https://tkdodo.eu/blog/effective-react-query-keys)
- Unikaj wrzucania wszystkiego do jednego pliku. Kod powinien być podzielony tak, żeby łatwo się go czytało i rozszerzało.

### 4. Obsługa stanów zapytań

- Wykorzystaj stany zwracane przez TanStack Query (`isPending`, `isFetching`, `isError`, `error`) do wyświetlania:
  - **wskaźnika ładowania** — gdy dane nie są jeszcze dostępne (`isPending`),
  - **wskaźnika odświeżania w tle** — gdy dane są już widoczne, ale trwa ponowne zapytanie (`isFetching && !isPending`),
  - **komunikatu o błędzie** — gdy zapytanie się nie powiedzie (`isError`).
- Dotyczy to zarówno pobierania listy, jak i mutacji (dodawanie/edycja/usuwanie).
- Implementacja nie musi być skomplikowana — wystarczy prosty tekst, np. "Ładowanie...", "Odświeżanie..." i komunikat o błędzie.

### 5. Stylowanie

Możesz użyć dowolnego rozwiązania do stylowania, także takiego, którego nie było na wykładzie.

Jeśli wybierzesz rozwiązanie spoza materiału z wykładu, prowadzący może poprosić Cię o wyjaśnienie, jak działa i dlaczego go użyłeś.

Dopracowanie wizualne (estetyka, design) **nie** jest oceniane — nie skupiaj się na wyglądzie. Natomiast aplikacja musi być czytelna i poprawnie działać (np. elementy nie mogą na siebie nachodzić, układ nie może się „rozjeżdżać").
