import { memo } from "react";
import Search from "./Search";

const Header = () => {
  
    return (
      <header>
        <h1>NEWSLETTER</h1>
        <Search/>
      </header>
    );
}
  
  
export default memo(Header);