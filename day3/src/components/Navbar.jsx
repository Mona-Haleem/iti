import { memo ,useCallback, useRef} from "react";

const Navbar = ({setCategory}) => {
    let activeCat = useRef(null);

    const changeCategory = useCallback((e)=>{
      if (e.target.tagName === 'P'){
        if (activeCat.current) activeCat.current.className = '';
        e.target.className='active';
        activeCat.current = e.target;
        setCategory(e.target.dataset.query)
      }
    },[])

    return (
      <nav>
        <div onClick={changeCategory}>
          <p data-query="business">Politics</p>
          <p ref={activeCat} className="active" data-query="general">World</p>
          <p data-query="">Econonmy</p>
          <p data-query="technology">Science & Tech</p>
          <p data-query="business">Buisness</p>
          <p data-query="entertainment">Travel</p>
          <p data-query="general">Climate</p>
          <p data-query="health">Lifestyle</p>
          <p data-query="health">Food</p>
          <p data-query="sports">Sports</p>
        </div>
        <p className="weather">
          <span>13:40  &nbsp;</span> 
          <img src="/images/Weather.png"/>
          <span> 24 °C</span>
        </p>
      </nav>
    );
}
  
  
export default memo(Navbar);