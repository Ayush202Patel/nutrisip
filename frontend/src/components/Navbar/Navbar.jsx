import React from "react";
import { Link, useLocation } from "react-router-dom"; // 👈 Import useLocation instead of NavLink
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCircleUser,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = ({ setShowLogin }) => {
  // Get the current route path (e.g., "/", "/shop", "/about")
  const location = useLocation();

  return (
    <div className="navbar">
      
      {/* Logo Link */}
      <Link to="/" className="image">
        <img src="/Nutrisip.png" alt="NutriSip Logo" />
      </Link>

      {/* Navigation Menu */}
      <div className="nav-menu">
        <ul>
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className={location.pathname === "/shop" ? "active" : ""}>
              Shop
            </Link>
          </li>
          <li>
            <Link to="/aboutUs" className={location.pathname === "/aboutUs" ? "active" : ""}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Action Icons */}
      <div className="icons">
        <ul>
          <li><FontAwesomeIcon className="search-icon" icon={faSearch} /></li>
          <li>
            <Link to="/cart" className={location.pathname === "/cart" ? "active" : ""}>
              <FontAwesomeIcon className="bag-icon" icon={faCartShopping} />
            </Link>
          </li>
          <li>
            {/* Add the onClick event to the User Icon here 👇 */}
            <FontAwesomeIcon 
              className="user-icon" 
              icon={faCircleUser} 
              onClick={() => setShowLogin(true)} 
              style={{ cursor: "pointer" }} 
            />
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default Navbar;