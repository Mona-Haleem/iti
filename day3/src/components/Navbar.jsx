import { memo } from "react";

const Navbar = () => {
  
    return (
      <nav>
        <div>
          <p>Politics</p>
          <p className="active">World</p>
          <p>Econonmy</p>
          <p>Science & Tech</p>
          <p>Buisness</p>
          <p>Travel</p>
          <p>Climate</p>
          <p>Lifestyle</p>
          <p>Food</p>
          <p>Sports</p>
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