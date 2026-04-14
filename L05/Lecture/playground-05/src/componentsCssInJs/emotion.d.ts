import "@emotion/react";
import { ThemeTokens } from "./theme";

declare module "@emotion/react" {
  export type Theme = ThemeTokens;
}
