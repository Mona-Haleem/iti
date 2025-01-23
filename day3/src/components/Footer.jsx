import { memo } from "react";

const Footer = () => {
  
    return (
      <footer>
        <h1>NEWSLETTER</h1>
        <div className="footerLinks">
            <div>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Copyright Policy</p>
                <p>Data Policy</p>
                <p>Accessibility</p>
                <p>Help</p>
            </div>
            <p>© 2023 Newsletter, All rights reserved</p>
        </div>
        <div className="categories">
          <p>Politics</p>
          <p>World</p>
          <p>Econonmy</p>
          <p>Science & Tech</p>
          <p>Buisness</p>
          <p>Travel</p>
          <p>Climate</p>
          <p>Lifestyle</p>
          <p>Food</p>
          <p>Sports</p>
        </div>
      </footer>
    );
}
  
  
export default memo(Footer);