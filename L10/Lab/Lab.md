# Zadanie: Book Library i Routing (10p)

Twoim zadaniem jest zbudowanie prostej aplikacji **Book Library**, w której głównym celem dydaktycznym jest ćwiczenie routingu z użyciem React Router. Dane mają być w większości statyczne, a logika aplikacji powinna pozostać możliwie prosta i skupiona na nawigacji oraz parametrach URL.

W zadaniu nie chodzi o rozbudowane zarządzanie stanem ani backend. Najważniejsze są: kilka widoków, parametry trasy, parametry wyszukiwania i podstawowa reużywalność komponentów.

## Materiały

- [React Router — Main Concepts](https://reactrouter.com/start/framework/main-concepts)
- [React Router — Route Params](https://reactrouter.com/start/framework/routing#dynamic-segments)
- [React Router — Search Params](https://reactrouter.com/start/framework/navigating#search-params)
- [React Router — Navigate](https://reactrouter.com/api/components/Navigate)
- [React Router — Outlet](https://reactrouter.com/api/components/Outlet)

## Środowisko

Frontend tworzysz samodzielnie w oparciu o React + TypeScript.

Nie używaj backendu. Dane książek trzymaj lokalnie, np. w pliku `src/data/books.ts` albo w pliku JSON importowanym do aplikacji.

Możesz zacząć od nowego projektu Vite.

## Wymagania

### 1. Implementacja

Zaimplementuj aplikację **Book Library**, która zawiera:

- stronę główną biblioteki, krótkim opisem i podstawowymi informacjami o ofercie,
- stronę katalogu książek z listą książek i filtrami,
- stronę pojedynczej książki z widokiem szczegółów,
- sekcję/panel administratora do zarządzania książkami.

Wymagania szczegółowe:

- strona główna i katalog muszą być zawsze widoczne w nawigacji umieszczonej na górze aplikacji,
- katalog książek musi korzystać z parametrów wyszukiwania w URL, np. `query`, `sort`, i odczytywać je po odświeżeniu strony,
- filtry katalogu muszą obejmować prostą wyszukiwarkę (search) oraz sortowanie,
- z listy książek musi prowadzić link do widoku szczegółów konkretnej książki,
- id książki powinno znaleźć się w URL widoku szczegółów,
- każdy widok aplikacji powinien być osiągalny bezpośrednio przez URL (direct link),
- sekcja administratora musi umożliwiać zarządzanie książkami, co najmniej: tworzenie i edycję,
- funkcje administracyjne (linki, przyciski, formularze, trasy) muszą być widoczne i dostępne tylko dla użytkownika z rolą `admin`,
- użytkownik z rolą `guest` może przeglądać dane, ale nie powinien widzieć ani używać akcji administracyjnych.

Nie wymagamy pełnej autoryzacji (logowania, haseł, tokenów, backendowej kontroli dostępu). W tym zadaniu wystarcza prosty model ról po stronie frontendu.

### 2. Routing

- Użyj mechanizmu routingu do obsługi wszystkich widoków.
- Wykorzystaj **route params** dla pojedynczej książki, np. `/books/:bookId`.
- Wykorzystaj **search params** dla filtrów katalogu.
- Zadbaj o wspólny layout z nawigacją i miejscem na renderowanie podstron.
- Zaimplementuj **zagnieżdżone layouty**: jeden główny layout aplikacji (np. header + footer + miejsce na podstrony) oraz dodatkowy layout zagnieżdżony dla sekcji administratora, z lokalną nawigacją admina (np. lista książek / nowa książka).

### 3. Rola użytkownika

- Stan roli użytkownika (`admin` / `guest`) przechowuj w wybrany przez siebie sposób.
- Na podstawie tej roli pokazuj lub ukrywaj odpowiednie przyciski, linki i formularze.
- Zmiana roli powinna od razu wpływać na widoczne opcje w interfejsie.
- Sposób przechowywania roli jest dowolny (np. Context, localStorage, komponentowy state, biblioteka zarządzania stanem).
- Trwałość roli po odświeżeniu strony (np. localStorage) jest opcjonalna.

### 4. Architektura

- Trzymaj kod w czytelnych plikach i komponentach, zamiast umieszczać wszystko w jednym miejscu.
- Zadbaj o prostą i logiczną strukturę: layout, strony, komponenty wspólne, dane.
- Użyj TypeScript i własnych typów dla książek, filtrów i roli użytkownika.
- Logika powinna pozostać prosta, bez dodatkowych funkcji, które nie są potrzebne do obsługi nawigacji i widoków.

### 5. Stylowanie

Możesz użyć dowolnego rozwiązania do stylowania, także takiego, którego nie było na wykładzie.

Jeśli wybierzesz rozwiązanie spoza materiału z wykładu, prowadzący może poprosić Cię o wyjaśnienie, jak działa i dlaczego go użyłeś.

Warstwa wizualna nie jest najważniejsza, ale aplikacja musi być czytelna, spójna i poprawnie działać na różnych rozmiarach ekranu.
