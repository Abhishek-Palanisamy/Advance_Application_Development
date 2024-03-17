import React from "react";
import '../assets/css/Styles.css'
import Logo2 from '../assets/images/Logo2.png'
function Header() {
  return (
    <>
      <div className="header-container">
        <div className="header-enclosure">
          <div className="giftcraft-title">
          <img width="50" height="50" src="https://image.shutterstock.com/image-vector/hg-gh-letter-modern-vector-260nw-2419676609.jpg" alt="circled-h"/> </div>
          <ul className="header-menu">
            <li><h3>Home</h3></li>
            <li><h3>About</h3></li>
            <li><h3>Contact</h3></li>
            <li><h3>Welcome</h3></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
