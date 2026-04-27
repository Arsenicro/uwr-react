# Zadanie: Settings Dashboard — Base UI

Twoim zadaniem jest zbudowanie strony **Settings Dashboard** przy użyciu [Base UI](https://base-ui.com/) — biblioteki bezstylowych (headless) komponentów React. Głównym celem dydaktycznym tego zadania jest ćwiczenie pracy z komponentami headless UI i stosowanie do nich własnych styli.

Base UI dostarcza dostępne, funkcjonalne komponenty z **zerowym domyślnym stylem**. Cała warstwa wizualna leży po Twojej stronie.

[Przykładowe rozwiązanie](example.png)

## Materiały

- [Base UI — Handbook: Styling](https://base-ui.com/react/handbook/styling)
- [Base UI — Accordion](https://base-ui.com/react/components/accordion)
- [Base UI — Dialog](https://base-ui.com/react/components/dialog)
- [Base UI — Switch](https://base-ui.com/react/components/switch)
- [Base UI — Select](https://base-ui.com/react/components/select)
- [Base UI — Slider](https://base-ui.com/react/components/slider)
- [Base UI — Radio](https://base-ui.com/react/components/radio)
- [Base UI — Combobox](https://base-ui.com/react/components/combobox)
- [Base UI — Tooltip](https://base-ui.com/react/components/tooltip)
- [shadcn/ui](https://ui.shadcn.com/)

## Środowisko

Utwórz nowy projekt za pomocą Vite: `npm create vite@latest settings-dashboard -- --template react-ts`.

Zainstaluj Base UI: `npm install @base-ui/react`.

Wybierz i zainstaluj preferowane podejście do stylowania (np. Tailwind CSS, SCSS, Emotion, zwykły CSS).

Opcjonalnie możesz użyć [shadcn/ui](https://ui.shadcn.com/), który dostarcza gotowe, ostylowane wrappery komponentów Base UI. **Nie jest to wymagane** — możesz stylować komponenty Base UI od zera.

## Wymagania

### 1. Implementacja

Zaprojektuj aplikację „Settings Dashboard", która zawiera następujące sekcje, każda wewnątrz panelu **Accordion**:

- **Profile** — pola tekstowe na imię i email, **Combobox** do wyboru umiejętności/zainteresowań (z co najmniej 10 predefiniowanymi opcjami, które można filtrować przez wpisywanie; użytkownik może wybrać wiele).
- **Notifications** — trzy przełączniki **Switch** (np. powiadomienia email, powiadomienia push, emaile marketingowe) oraz grupa **Radio** do wyboru częstotliwości podsumowań (np. natychmiast / codziennie / co tydzień).
- **Appearance** — lista rozwijana **Select** do wyboru języka oraz **Slider** do ustawienia rozmiaru czcionki.
- **Danger Zone** — przycisk „Usuń konto", który otwiera **Dialog** potwierdzenia z akcjami Anuluj i Potwierdź.

Dodatkowo:

- Użyj **Tooltip** na co najmniej dwóch elementach (np. ikonki informacyjne obok etykiet), aby wyjaśnić, co dane ustawienie robi.

### 2. Komponenty Base UI

Twoja aplikacja musi używać następujących komponentów Base UI:

| Komponent     | Zastosowanie                                                                                                       |
| ------------- | ------------------------------------------------------------------------------------------------------------------ |
| **Accordion** | Zwijane panele dla każdej sekcji ustawień. Panele powinny płynnie animować otwieranie/zamykanie.                   |
| **Switch**    | Przełączniki dla ustawień typu tak/nie. Muszą wizualnie pokazywać stan włączony/wyłączony.                         |
| **Select**    | Lista rozwijana do wyboru ze stałej listy (np. język). Musi otwierać popup z opcjami do wyboru.                    |
| **Slider**    | Suwak zakresu (np. rozmiar czcionki). Przeciąganie musi aktualizować wyświetlaną wartość.                          |
| **Dialog**    | Modalne potwierdzenie dla destrukcyjnych akcji. Musi zawierać nakładkę tła (backdrop).                             |
| **Radio**     | Grupa radio dla ustawień jednokrotnego wyboru (np. częstotliwość podsumowań). Musi pokazywać wskaźnik zaznaczenia. |
| **Combobox**  | Filtrowalny multi-select (np. umiejętności). Wpisywanie musi filtrować listę opcji.                                |
| **Tooltip**   | Podpowiedź po najechaniu na ikonki informacyjne lub etykiety. Musi pojawiać się/znikać przy najechaniu.            |

### 3. Architektura

- **Stylowanie**: Użyj dowolnego podejścia do stylowania (Tailwind CSS, SCSS Modules, Emotion, CSS Modules, zwykły CSS, shadcn/ui). Nie używaj atrybutów `style` inline jako głównej metody stylowania. Dokumentacja Base UI zawiera gotowe przykłady w Tailwind i CSS Modules dla każdego komponentu — **nie kopiuj ich dosłownie**. Użyj ich jako punktu wyjścia, a następnie dostosuj style, aby stworzyć własny spójny design.
- **Komponenty**: Każdy wrapper komponentu Base UI (np. Twój ostylowany Switch, Select, Slider itd.) musi znajdować się w osobnym pliku i być **reużywalny** — powinien przyjmować propsy, aby można go było używać w różnych kontekstach bez duplikowania kodu. Na przykład jeden komponent `SettingsSwitch` powinien być reużywany dla każdego przełącznika w aplikacji, a nie kopiowany dla każdego użycia.
- **TypeScript**: Kod musi być w pełni typowany (bez `any`).
