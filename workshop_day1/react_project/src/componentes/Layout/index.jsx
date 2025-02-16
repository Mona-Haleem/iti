import React, { memo, useContext } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import ThemeContext from "../../contexts/ThemeContext.jsx";
import LanguageContext from "../../contexts/LanguageContext.jsx";

const Layout = ({children}) => {
  const { theme } = useContext(ThemeContext);
  const {Language} = useContext(LanguageContext);

  return (
    <div className="container-fluid p-0 layout-container" dir={Language}>
      <Header/>
      <div className="row m-0"> 
        <main className={`main col ${theme == 'dark'? 'bg-dark text-light' :'bg-white'}`}>
          {children}
        </main>
        <Sidebar/>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default memo(Layout);