import {memo, useContext} from "react";
import Navbar from "./Navbar";
import styles from './Header.module.css';
import ThemeContext from "../../contexts/ThemeContext";
import ContextToggler from "./ContextToggler";

const Header = () => {
  const { theme } = useContext(ThemeContext);
    return (
    <header className={`${styles.header} ${theme == "dark" ? "bg-black text-light" : ""}`}>
      <div className="d-flex align-items-center gap-2">
        <div>
          <h1 className="text-primary">E-Commerce</h1>
        </div>
        <Navbar/>
      </div>
      <div className="d-flex gap-2 align-items-center">
      <ContextToggler/>
      </div>
    </header>
  );
};

export default memo(Header);