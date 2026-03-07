import React from "react";
import { assets } from "../../assets/assets";
import "./Footer.css";
const Footer = () => {
  return <div className="footer">
    <div className="icons list">
      <h3>Follow Us </h3>
      <ul className="all-icons">
        <li><img src={assets.facebook_icon} alt="" /> </li>
        <li><img src={assets.linkedin_icon} alt="" /> </li>
        <li><img src={assets.linkedin_icon} alt="" /> </li>
      </ul>
    </div>
    <div className="about list">
      <h3>About Us</h3>
      <ul>
        <li>Contact Us</li>
        <li>Get In Touch</li>
        <li>Post your Reviews</li>
      </ul>
    </div>
    <div className="quick-links list">
      <h3>Quick Links</h3>
      <ul>
        <li>Home</li>
        <li>Shop</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
    </div>
  </div>;
};

export default Footer;
