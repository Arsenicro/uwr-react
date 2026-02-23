# Zadanie: Wizytówka (10p)

Twoim zadaniem jest stworzenie wizytówki w React.js. Głównym celem edukacyjnym tego zadania jest ćwiczenie tworzenia małych, reużywalnych komponenty oraz przekazywanie danych za pomocą propsów.

Zadanie składa się z dwóch części: samej wizytówki, oraz rysunku podziału na komponenty.

## Materiały

- [React.dev/learn - Your first component](https://react.dev/learn/your-first-component)
- [React.dev/learn - Importing and exporting components](https://react.dev/learn/importing-and-exporting-components)
- [React.dev/learn - Writing markup with JSX](https://react.dev/learn/writing-markup-with-jsx)
- [React.dev/learn - Javascript in JSX with curly braces](https://react.dev/learn/javascript-in-jsx-with-curly-braces)
- [React.dev/learn - Passing props to a component](https://react.dev/learn/passing-props-to-a-component)
- [React.dev/learn - Understanding Your UI as a tree](https://react.dev/learn/understanding-your-ui-as-a-tree)

## Przykładowe Rozwiązanie

Możesz wzorować się na poniższym przykładzie, ale własna inwencja (inny układ, style) jest mile widziana.

[Przykładowa wizytówka](business_card.png)

## Środowisko

Stwórz projekt przy użyciu Vite: `npm create vite@latest my-business-card -- --template react-ts`.

## Wymagania

### 1. Implementacja

Zaprojektuj wizytówkę zawierającą:

- Zdjęcie profilowe, Imię i Nazwisko, Stanowisko
- Dane kontaktowe (email, telefon, www)
- Sekcję "O mnie" oraz Listę umiejętności

_Stylistyka dowolna (estetyczna), dane mogą być losowe, o ile będą odpowiednio długie._

### 2. Architektura

- **Dekompozycja**: Podziel interfejs na mniejsze, logiczne komponenty (każdy w osobny pliku, np. w folderze `components/`).
- **Propsy**: Stosuj propsy tam, gdzie zwiększa to reużywalność lub czytelność. Nie twórz ich na siłę.
- **Typowanie**: Zdefiniuj interfejsy/typy dla propsów w TypeScript.
- **Czystość**: Główny plik (`App.tsx`) powinien zawierać kompozycję komponentów, a nie "ścianę" HTML-a.

### 3. Diagram

Stwórz prosty schemat drzewa komponentów (np. Paint, Excalidraw, kartka papieru):

- **Wierzchołki**: Nazwa komponentu + przyjmowane propsy.
- **Krawędzie**: Relacja rodzic-dziecko.

_Bądź gotów uzasadnić swój podział na zajęciach._

<details>
<summary>Podpowiedź: Ile komponentów?</summary>
Wzorcowe rozwiązanie ma ok. 10 komponentów. Każdy logiczny, uzasadniony podział (np. 7 czy 12) jest akceptowalny, o ile sprzyja czytelności i unika duplikacji.
</details>
