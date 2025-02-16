import { memo, useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";

const Sidebar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <aside className={`col-3 ${theme == 'dark'? 'bg-secondary' :'bg-light'}`} >
        sideBar
    </aside>
  );
};

export default memo(Sidebar);