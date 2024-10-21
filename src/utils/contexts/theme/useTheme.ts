import { ThemeContext } from './ThemeContex';
import { useContext } from 'react';

export const useTheme = () => {
  const themeContext = useContext(ThemeContext);
  return { ...themeContext };
};
