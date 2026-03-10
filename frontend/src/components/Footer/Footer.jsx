import React from "react";
import { Link } from "react-router-dom"; // Brought in Link for working navigation
import { assets } from "../../assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* Column 1: Brand & Info */}
        <div className="footer-brand">
          <h2 className="footer-logo">NutriSip</h2>
          <p className="footer-desc">
            Fresh, natural, and delicious fruit juices delivered right to your door. Fuel your body with the best of nature.
          </p>
          <p className="footer-address">
            📍 Sambalpur , Malipara Lane 1
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/aboutUs">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Customer Care */}
        <div className="footer-links">
          <h3>Customer Care</h3>
          <ul>
            <li><Link to="/contact">Get In Touch</Link></li>
            <li><Link to="#">Post your Reviews</Link></li>
            <li><Link to="#">Privacy Policy</Link></li>
            <li><Link to="#">Terms of Service</Link></li>
            <li><Link to="#">FAQs</Link></li>
          </ul>
        </div>

        {/* Column 4: Social Icons */}
        <div className="footer-socials">
          <h3>Follow Us</h3>
          <ul className="social-icons">
            <li><img src={assets.facebook_icon} alt="Facebook" /></li>
            <li><img src={assets.linkedin_icon} alt="LinkedIn" /></li>
            {/* Swap this with whatever your third icon is named in assets.js */}
            <li><img className="instagram-icon" src={assets.instagram_icon || assets.linkedin_icon} alt="Instagram" /></li> 
          </ul>
        </div>

      </div>

      <hr className="footer-divider" />
      
      {/* Bottom Copyright Area */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} NutriSip. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;