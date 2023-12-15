import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
const Header = () => {
 console.log('Header Render');
  const [btnName,setBtnName] = useState("LOGIN");
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
        ></img>
      </div>
      <div className="navItems">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="loginButton" onClick={()=>{btnName=="LOGIN"?setBtnName("LogOut"):setBtnName("LOGIN");console.log(btnName)}}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
