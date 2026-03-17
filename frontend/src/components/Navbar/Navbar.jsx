import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCircleUser,
  faSearch,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import Search from "../Search/Search";
import { juices } from "../../assets/assets";

const Navbar = ({ setShowLogin }) => {
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();

  return (
    <div className="navbar">
      
      <Link to="/" className="image">
        <img src="/Nutrisip.png" alt="NutriSip Logo" />
      </Link>

      {/* Menu stays visible now */}
      <div className="nav-menu">
        <ul>
          <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
          <li><Link to="/shop" className={location.pathname === "/shop" ? "active" : ""}>Shop</Link></li>
          <li><Link to="/aboutUs" className={location.pathname === "/aboutUs" ? "active" : ""}>About Us</Link></li>
          <li><Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact Us</Link></li>
        </ul>
      </div>

      <div className="icons">
        <ul>
          <li className="search-wrapper-li">
            {showSearch && (
              <div className="search-inline-container">
                <Search 
                  juiceData={juices} 
                  onClose={() => setShowSearch(false)} 
                />
              </div>
            )}
            
            <FontAwesomeIcon 
              className={`search-icon ${showSearch ? "active" : ""}`} 
              icon={showSearch ? faXmark : faSearch} 
              onClick={() => setShowSearch(!showSearch)}
              style={{ cursor: "pointer" }}
            />
          </li>

          <li>
            <Link to="/cart" className={location.pathname === "/cart" ? "active" : ""}>
              <FontAwesomeIcon className="bag-icon" icon={faCartShopping} />
            </Link>
          </li>

          <li>
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