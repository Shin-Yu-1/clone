import { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme } from '@/styles/theme.js';

export const ThemeContext = createContext();

export const ThemeProviderWrapper = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = newTheme => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
