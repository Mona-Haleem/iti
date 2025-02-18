import {memo, useContext} from "react";
import ThemeContext from "../../contexts/ThemeContext";
import LanguageContext from "../../contexts/LanguageContext";
import { IconButton } from "@mui/material";
import { NightsStay, WbSunny } from "@mui/icons-material";
import LanguageIcon from '@mui/icons-material/Language';

const ContextToggler = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { setLanguage} = useContext(LanguageContext);
  
  const toggleTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
    console.log(theme)
  };
  const toggleLanguageDirection = () => {
    setLanguage((dir) => dir == "ltr" ? "rtl" :"ltr");
  };

   return (
        <>
        <IconButton onClick={toggleTheme} color="inherit">
            {theme == "dark" ? <WbSunny /> : <NightsStay />}
          </IconButton>
          <IconButton onClick={toggleLanguageDirection} color="inherit">
            <LanguageIcon  />
          </IconButton>
        </>
    
  );
};

export default memo(ContextToggler);