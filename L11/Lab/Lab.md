# Zadanie: ToDo App z Next.js (10p)

Twoim zadaniem jest zbudowanie prostej aplikacji **ToDo** w **Next.js (App Router)**, która komunikuje się z zewnętrznym API — tym samym co w Lab 08 i Lab 09.

Głównym celem dydaktycznym jest zrozumienie podziału **Server Component / Client Component**, file-based routing, pobierania danych na serwerze oraz mutowania danych za pomocą **Server Actions**. Nie chodzi o budowanie backendu w Next.js ani o użycie TanStack Query.

## Materiały

- [Next.js — App Router](https://nextjs.org/docs/app)
- [Next.js — Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components)
- [Next.js — Fetching Data](https://nextjs.org/docs/app/getting-started/fetching-data)
- [Next.js — Mutating Data](https://nextjs.org/docs/app/getting-started/mutating-data)

## Uwagi

- Warstwa wizualna (estetyka, design) **nie** będzie oceniana, ale aplikacja powinna być czytelna i schludna.
- Twoje rozwiązanie **nie musi** być tak rozbudowane jak „ostateczne rozwiązanie” pokazywane na wykładzie — skup się na spełnieniu wymagań poniżej.
- Używaj **App Router** (katalog `app/`), a nie legacy Pages Router.
- Trzymaj się prostoty i działającej funkcjonalności.

## Środowisko

Utwórz nowy projekt Next.js z TypeScript:

```bash
npx create-next-app@latest my-todo-next --typescript --app --eslint --tailwind
```

Backend znajdziesz w [todo-server](./todo-server/).

Uruchomienie backendu:

1. npm install
2. npm start

API działa na http://localhost:3001

Endpointy:

- GET /todos — wszystkie zadania
- GET /todos?done=true — tylko ukończone
- GET /todos?done=false — tylko aktywne
- GET /todos/:id — pojedyncze zadanie
- POST /todos
- PUT /todos/:id
- DELETE /todos/:id

## Wymagania

### 1. Implementacja

Zaimplementuj aplikację ToDo z następującymi widokami:

- `/` — strona główna z krótkim opisem,
- `/todos` — lista zadań z API,
- `/todos/new` — formularz dodawania zadania,
- `/todos/[id]` — szczegóły zadania,
- `/todos/[id]/edit` — formularz edycji zadania.

Aplikacja powinna umożliwiać:

- wyświetlanie listy zadań z API,
- filtrowanie listy po statusie (all / active / completed) z użyciem query parameter `done`,
- pokazywanie stanu ładowania przy przełączaniu filtrów,
- dodawanie zadania,
- edycję zadania (tekst i status done),
- nawigację między widokami za pomocą Next.js `<Link>`.

Strona główna i lista zadań muszą być zawsze widoczne w górnym pasku nawigacji. Aktywny link w nawigacji powinien być wizualnie wyróżniony. Każdy widok musi być osiągalny bezpośrednio przez URL

### 2. Server i Client Components

- Pobieraj dane dla listy, szczegółów i edycji w **Server Components** za pomocą `fetch` — nie używaj `useEffect` do początkowego ładowania danych na tych stronach.
- Na `/todos` odczytuj search param `done` i pobieraj odpowiednią listę z API.
- Gdy użytkownik przełącza filtry, pokaż wskaźnik ładowania, dopóki nowa lista się nie załaduje (np. za pomocą `Suspense` wokół listy).
- Formularze i interaktywny UI umieszczaj w **Client Components** (`"use client"`).
- Na stronie edycji pobierz zadanie na serwerze i przekaż je do formularza w Client Component, aby pola były wstępnie uzupełnione.
- Jeśli zadanie nie istnieje, wywołaj `notFound()` i zapewnij stronę `not-found.tsx` dla `/todos/[id]`.

### 3. Server Actions

- Operacje **create** i **update** zaimplementuj za pomocą **Server Actions** (`"use server"`), a nie client-side `fetch` w `onSubmit`.
- Formularze podłącz przez prop `action`, np. `<form action={createTodo}>`.
- Zewnętrzne API wywołuj z poziomu Server Action (request leci przez serwer Next.js).
- Po udanej mutacji wywołaj `revalidatePath('/todos')`, a następnie `redirect(...)`, aby przekierować użytkownika na listę lub stronę szczegółów.
- Podczas wysyłania formularza wyłącz jego inputy i przycisk submit.

### 4. Architektura

- UI podziel na czytelne komponenty, zamiast trzymać wszystko w jednym pliku.

### 5. Obsługa błędów i wskaźniki ładowania

- Pokaż wskaźnik ładowania podczas pobierania danych (np. `loading.tsx` na `/todos`).
- Przy przełączaniu filtrów na `/todos` pokaż wskaźnik ładowania, dopóki filtrowana lista nie będzie gotowa — nie zostawiaj starej listy bez żadnej informacji zwrotnej.
- Pokaż komunikat o błędzie, gdy request się nie powiedzie.
- Dotyczy to zarówno ładowania stron, jak i wysyłania formularzy.
- Wystarczy prosty tekst, np. „Ładowanie...” i komunikat o błędzie.

### 6. Stylowanie

Możesz użyć dowolnego rozwiązania do stylowania, także takiego, którego nie było na wykładzie.

Jeśli wybierzesz rozwiązanie spoza materiału z wykładu, prowadzący może poprosić Cię o wyjaśnienie, jak działa i dlaczego go użyłeś.

Dopracowanie wizualne (estetyka, design) **nie** jest oceniane — nie skupiaj się na wyglądzie. Natomiast aplikacja musi być czytelna i poprawnie działać (np. elementy nie mogą na siebie nachodzić, layout nie może się „rozjeżdżać”).
