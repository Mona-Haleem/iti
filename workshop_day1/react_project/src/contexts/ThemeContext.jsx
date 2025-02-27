import { createContext, useState } from "react";
import {ThemeProvider} from '@mui/material/styles';
import { lightTheme, darkTheme } from '../utils/theme.js';

const ToggleThemeContext = createContext();

export const ToggleThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  return (
    <ToggleThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </ToggleThemeContext.Provider>
  );
};

export default ToggleThemeContext;
