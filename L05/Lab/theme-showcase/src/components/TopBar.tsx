import { themes, type ThemeMode } from '../model';

function TopBar({ theme, onThemeChange }: {
  theme: ThemeMode
  onThemeChange: (t: ThemeMode) => void
}) {
  return (
    <div className="card top-bar">
      <h1 className="app-title">Theme Showcase</h1>
      <select
        className="theme-select"
        value={theme}
        onChange={(e) => onThemeChange(e.target.value as ThemeMode)}
      >
        {themes.map((t) => (
          <option key={t} value={t}>{t.charAt(0).toUpperCase() + t.slice(1)}</option>
        ))}
      </select>
    </div>
  )
}

export default TopBar
