# Zadanie: Recipe Box — testowanie (10p)

Twoim zadaniem jest napisanie testów dla gotowej aplikacji **Recipe Box** w React.js. Aplikacja jest już zaimplementowana — **nie** budujesz jej od zera.

## Materiały

- [Vitest](https://vitest.dev/)
- [Vitest — Component Testing](https://vitest.dev/guide/browser/component-testing)
- [vitest-browser-react](https://github.com/vitest-dev/vitest-browser-react)
- [Playwright — Getting Started](https://playwright.dev/docs/intro)

## Uwagi

- Aplikacja startowa jest gotowa i powinna działać po `npm install` i `npm run dev`.
- **Nie modyfikuj kodu aplikacji**, chyba że jest to absolutnie konieczne do testowania (np. brakujący `aria-label` albo błąd blokujący test)
- Wszystkie testy powinny dać się uruchomić z linii poleceń (np. przez skrypty npm).
- Oddziel testy **jednostkowe** (Node) od testów **browser** (Vitest Browser Mode), np. przez nazewnictwo plików (`*.test.ts` vs `*.browser.test.tsx`) i ustawienie `projects` w Vitest.

## Środowisko

Projekt startowy: [recipe-box](./recipe-box/).

```bash
cd recipe-box
npm install
```

Aplikacja działa na http://localhost:5173.

Testy e2e trzymaj w katalogu `e2e/`.

## Wymagania

### 1. Testy, które musisz zaimplementować

Wystarczą **trzy** obszary testów. Każdy trzymaj krótko i czytelnie.

#### Test jednostkowy — `recipeReducer`

Napisz testy jednostkowe dla **`recipeReducer`** w `src/lib/`

Dodawanie przepisu korzysta z **`getRandomUUID()`** — zamockuj je w testach jednostkowych (np. przez `vi.mock`) i zwracaj stałe UUID, żeby asercje były przewidywalne.

#### Test browser — `RecipeForm`

Napisz test browser z `vitest-browser-react` dla **`RecipeForm`**.

Renderuj formularz w **`RecipeProvider`** (ten sam wzorzec co w aplikacji z wykładu). Sprawdzaj zachowanie z perspektywy użytkownika — np. wyślij pusty formularz i upewnij się, że pojawia się błąd walidacji; albo wypełnij pola, wyślij i sprawdź, że przepis jest widoczny, gdy renderujesz też **`RecipeList`** (z `initialRecipes={[]}`).

Nie testuj szczegółów implementacji (wewnętrzny stan, klasy CSS — chyba że niosą znaczenie dla użytkownika).

#### Test end-to-end — główny flow (Playwright)

Napisz **jeden** scenariusz Playwright dla standardowego flow użytkownika

Skonfiguruj Playwright tak, aby uruchomienie testów e2e z linii poleceń automatycznie startowało serwer deweloperski (np. przez `webServer` w konfiguracji).

### 2. Plan pokrycia testami (tylko dokumentacja)

Oprócz testów powyżej **przeanalizuj resztę aplikacji** i zdecyduj, co _można_ by testować oraz **jaki rodzaj testu** pasuje do każdej części.

Opisz to w pliku **[`recipe-box/TEST_PLAN.md`](./recipe-box/TEST_PLAN.md)**. Nie musisz trzymać się sztywnego szablonu. Dla każdego obszaru, który wymienisz, podaj krótko: co byś testował/a, jaki rodzaj testu (**unit**, **browser**, **e2e**) i dlaczego ten wybór ma sens. Możesz też zaznaczyć, czy faktycznie zaimplementowałeś/aś dany test w tym zadaniu.

**Nie musisz** implementować wszystkich punktów z planu — chodzi o przemyślenie pokrycia, a nie o napisanie każdego możliwego testu.

### 3. Konfiguracja projektu

- Skonfiguruj projekt tak, aby testy jednostkowe, browser i e2e można było uruchamiać osobno z linii poleceń.
- Trzymaj TypeScript — bez `any` w plikach testowych.
- Testy powinny być czytelne: sensowne nazwy `describe` / `it`, struktura arrange–act–assert.
