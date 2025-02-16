import { memo, useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext.jsx";
import styles from './footer.module.css';

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <footer className={`${styles.footer} ${theme == "dark" ? "bg-black text-light" : ""}` }>
      <p>&copy; 2025 Mansoura react demo. All rights reserved</p>
    </footer>
  );
};

export default memo(Footer);