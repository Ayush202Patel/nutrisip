import React from "react";
import "./Header.css";
import { juices } from "../../assets/assets";
const Header = () => {
  return (
    <div>
      <div className="header">
      <div className="header-content">
        <h1>Get Your Favourite Beverages At Reasonable Price</h1>
        <button>Shop Now</button>
      </div>
    </div > 
      <div className="juice-header-home">
        <h1>Explore Our Popular Juices</h1>
      </div>
    </div>
  );
};

export default Header;
