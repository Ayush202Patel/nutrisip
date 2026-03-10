import React from "react";
import { Link } from "react-router-dom"; // So the button actually works
import "./Header.css";

const Header = () => {
  return (
    <header className="header-container">
      
      {/* Hero Banner Section */}
      <div className="hero-banner">
        <div className="hero-content">
          <h1>Refresh Your Day with 100% Natural Juices</h1>
          <p>
            Sip the goodness of nature. Freshly blended, no artificial flavors, 
            just pure energy in every drop.
          </p>
          
          <Link to="/shop">
            <button className="shop-now-btn">Shop Now</button>
          </Link>
        </div>
      </div>

      <div className="section-title-container">
        <h2>Explore Our Popular Juices</h2>
        <div className="title-underline"></div>
      </div>
      
    </header>
  );
};

export default Header;