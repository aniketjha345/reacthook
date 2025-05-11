import { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const lightTheme = {
  primary: '#2a2a2a',
  secondary: '#4a4a4a',
  background: '#ffffff',
  surface: '#f5f5f5',
  text: '#2a2a2a',
  textSecondary: '#4a4a4a',
  accent: '#4ecdc4',
  accentHover: '#45b7d1',
  error: '#ff6b6b',
  success: '#96ceb4',
  border: '#e0e0e0',
  shadow: 'rgba(0, 0, 0, 0.1)',
  overlay: 'rgba(255, 255, 255, 0.85)',
  navBackground: 'rgba(255, 255, 255, 0.95)',
};

const darkTheme = {
  primary: '#ffffff',
  secondary: '#b3b3b3',
  background: '#000000',
  surface: '#111111',
  text: '#ffffff',
  textSecondary: '#b3b3b3',
  accent: '#4ecdc4',
  accentHover: '#45b7d1',
  error: '#ff6b6b',
  success: '#96ceb4',
  border: '#333333',
  shadow: 'rgba(0, 0, 0, 0.3)',
  overlay: 'rgba(0, 0, 0, 0.85)',
  navBackground: 'rgba(0, 0, 0, 0.95)',
};

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};