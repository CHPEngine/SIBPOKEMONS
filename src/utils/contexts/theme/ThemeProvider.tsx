import { FC, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';

import type { ThemeContextProps } from './ThemeContex';
import { ThemeContext } from './ThemeContex';

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeContext] = useState<ThemeContextProps['theme']>(
    (localStorage.getItem('pokedex-theme') as Theme) || 'dark'
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);
  }, [theme]);

  const setTheme = useCallback(
    (theme: Theme) => {
      localStorage.setItem('pokedex-theme', theme);
      setThemeContext(theme);
    },
    [theme]
  );

  const value = useMemo(
    () => ({
      theme,
      setTheme
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
