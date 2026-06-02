interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export default function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <button
      type="button"
      className="rounded-full border border-indigo-400 bg-indigo-900 px-4 py-2 text-sm font-medium text-indigo-100 hover:bg-indigo-800 dark:border-indigo-600 dark:bg-slate-800 dark:hover:bg-slate-700"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={onToggle}
    >
      {isDark ? "☀ Light" : "☾ Dark"}
    </button>
  );
}
