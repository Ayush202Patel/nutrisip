import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faCartShopping,
  faCircleUser,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="image">
        <img src="/Nutrisip.png" alt="" />
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="icons">
        <ul>
          <li>
            <FontAwesomeIcon className="search-icon" icon={faSearch} />
          </li>
          <li>
            <FontAwesomeIcon className="bag-icon" icon={faCartShopping} />
          </li>
          <li>
            <FontAwesomeIcon className="user-icon" icon={faCircleUser} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
