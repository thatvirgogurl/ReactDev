import { useState,useEffect } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
const Header = () => {
  console.log("Header Render");
  const [btnName, setBtnName] = useState("LOGIN");
  //if no dependency array =>useEffect is called on every rendered
  //if deppendecy array is empmty=[]=>useEffect is called on initial rendered (justOnwces)
  //if dependency array is [btnName] is called everytime btnName is updated
  useEffect(() => {
    console.log("useEffectCalled");
  }, [btnName]);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="navItems">
        <ul>
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
