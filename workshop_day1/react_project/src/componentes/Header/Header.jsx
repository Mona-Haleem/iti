import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
//import ThemeContext from "../../contexts/ThemeContext";
import {  NavLink } from "react-router-dom";
import routes from "./routes";
import Navbar from "./Navbar";

const Header = () => {

  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };


  return (
    <header className="header">
      <div className="d-flex align-items-center gap-2">
        <div>
          <h1 className="text-primary">E-Commerce</h1>
        </div>
        <Navbar/>
      </div>
      <div className="d-flex gap-2 align-items-center">
        <Button
          onClick={toggleTheme}
          variant={theme == "dark" ? "outline-secondary" : "outline-primary"}
        >
          Toggle theme
        </Button>
      </div>
    </header>
  );
};

export default React.memo(Header);