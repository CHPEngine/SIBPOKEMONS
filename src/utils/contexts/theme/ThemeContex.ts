import { createContext } from 'react';

export interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const INITIAL_THEME: Theme = (localStorage.getItem('pokedex-theme') as Theme) || 'dark';

export const ThemeContext = createContext<ThemeContextProps>({
  theme: INITIAL_THEME,
  setTheme: () => {}
});
