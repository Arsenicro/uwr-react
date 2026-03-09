import React, { createContext, useContext, useState } from 'react';
import HeavyComponent from './HeavyComponent.tsx';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const ThemeToggler: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );
};

const BadPerformance: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme: (newTheme) => setTheme(newTheme) }}>
      <div>
        <ThemeToggler />
        <HeavyComponent />
      </div>
    </ThemeContext.Provider>
  );
};

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme: (newTheme) => setTheme(newTheme) }}>
      {children}
    </ThemeContext.Provider>
  );
};

const GoodPerformance = () => {
  return (
    <ThemeProvider>
      <div>
        <ThemeToggler />
        <HeavyComponent />
      </div>
    </ThemeProvider>
  );
};

const ContextPerformance = () => {
  return (
    <div>
      {/* <BadPerformance /> */}
      <GoodPerformance />
    </div>
  );
};

export default ContextPerformance;
