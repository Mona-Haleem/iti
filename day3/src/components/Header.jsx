import { memo } from "react";
import Search from "./Search";

const Header = ({setKeywords}) => {
  
    return (
      <header>
        <h1>NEWSLETTER</h1>
        <Search setKeywords={setKeywords} />
      </header>
    );
}
  
  
export default memo(Header);