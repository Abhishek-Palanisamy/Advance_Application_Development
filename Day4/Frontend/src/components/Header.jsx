import React, { useState } from "react";
import '../assets/css/Styles.css'
import Logo2 from '../assets/images/Logo2.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../Redux/features/userSlice";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const user = useSelector(selectUser);
  const username = user.user && user.user.username ? user.user.username : 'Guest';
  const { carts } = useSelector((state) => state.allCart);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const hideDropdown = () => {
    setShowDropdown(false);
  };

  const dispatch=useDispatch();
  const nav=useNavigate();
  const handleLogout = () => {
    dispatch(logout())
    alert("Logout Successfully!")
    nav("/cart")
  };

  return (
    <>
      <div className="header-container">
        <div className="header-enclosure">
          <div className="giftcraft-title">
            <img width="250" src="https://thegiftstudio.com/cdn/shop/files/revised-logo.svg?v=1680978073&width=300" alt="circled-h"/>
          </div>
          <ul className="header-menu">
           <a href="/home"> <li><h3>Home</h3></li></a>
            <li><h3>About</h3></li>
           <a href="/contactus"> <li><h3>Contact</h3></li></a>
            <li className="welcome-container" onClick={toggleDropdown}>
              <div className="login-drop">
                <span className="welcome">Welcome {username}!</span>
                {showDropdown && (
                  <div className="dropdown" onClick={hideDropdown}>
                    <Link to="/user/">Profile</Link>
                    {username !== 'Guest' ? (
                      <span onClick={handleLogout}>Logout</span>
                    ) : (
                      <Link to="/">Login</Link>
                    )}
                  </div>
                )}
              </div>
              <span className="cart-count">{carts.length}</span>
            </li>
            <li>
            <Link to="/cart">  <ShoppingCartIcon className="cart-icon" /></Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
