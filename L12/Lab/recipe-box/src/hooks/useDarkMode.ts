import { useState } from "react";

function getInitialDarkMode() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function useDarkMode() {
  const [isDark, setIsDark] = useState(getInitialDarkMode);

  return {
    isDark,
    toggle: () => setIsDark((value) => !value),
  };
}
