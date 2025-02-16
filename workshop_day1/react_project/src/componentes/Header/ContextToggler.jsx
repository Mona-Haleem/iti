import {memo, useContext} from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import ThemeContext from "../../contexts/ThemeContext";
import LanguageContext from "../../contexts/LanguageContext";

const ContextToggler = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { setLanguage} = useContext(LanguageContext);
  
  const toggleTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };
  const toggleLanguageDirection = () => {
    setLanguage((dir) => dir == "ltr" ? "rtl" :"ltr");
  };

   return (
        <ButtonGroup size="sm" vertical >
            <Button
            onClick={toggleTheme}
            variant={theme == "dark" ? "outline-light" : "outline-primary"}
            >
            Toggle theme
            </Button>
            <Button
            onClick={toggleLanguageDirection}
            variant={theme == "dark" ? "outline-light" : "outline-primary"}
            >
            Toggle Language
            </Button>
        </ButtonGroup>
    
  );
};

export default memo(ContextToggler);