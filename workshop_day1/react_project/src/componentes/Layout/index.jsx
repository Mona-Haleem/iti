import React, { memo, useContext } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import LanguageContext from "../../contexts/LanguageContext.jsx";
import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";

const Layout = ({children}) => {
  const {Language} = useContext(LanguageContext);
  const theme = useTheme(); 
  const currStyle = {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  };

  return (
    <div className="flex flex-col min-h-screen" dir={Language}>
      <Header/>
      <Box sx={currStyle} className="flex flex-1"> 
        <main >
          {children}
        </main>
      </Box>
      <Footer></Footer>
    </div>
  );
};

export default memo(Layout);