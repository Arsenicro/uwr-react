interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export default function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <button
      type="button"
      className="rounded-full border border-teal-700 px-3 py-2 text-sm text-teal-50 hover:bg-teal-800 dark:border-teal-600 dark:hover:bg-teal-950"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={onToggle}
    >
      {isDark ? "Light mode" : "Dark mode"}
    </button>
  );
}
