import { memo, useCallback, useRef } from "react";

const Search = ({setKeywords}) => {
    const searchInput= useRef(null);

    const searchKeywords = useCallback(()=>{
      if (searchInput.current)
        setKeywords(encodeURIComponent(searchInput.current.value.trim()));
        searchInput.current.value ='';
    },[])

    return (
      <div>
        <input ref={searchInput} placeholder="Search for headlines"></input>
        <button onClick={searchKeywords}>SEARCH</button>  
      </div>
    );
}
  
  
export default memo(Search);