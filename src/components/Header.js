import { useState,useEffect } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"
const Header = () => {
  console.log("Header Render");
  const [btnName, setBtnName] = useState("LOGIN");

  useEffect(() => {
    console.log("useEffectCalled");
  }, [btnName]);
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="navItems">
        <ul>
          {/* window + . use for emoji */}
          <li>OnLineStatus:{onlineStatus?"🟢":"🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="loginButton"
            onClick={() => {
              btnName == "LOGIN" ? setBtnName("LogOut") : setBtnName("LOGIN");
              console.log(btnName);
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
