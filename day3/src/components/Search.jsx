import { memo } from "react";

const Search = () => {
  
    return (
      <div>
        <input placeholder="Search for headlines"></input>
        <button>SEARCH</button>  
      </div>
    );
}
  
  
export default memo(Search);