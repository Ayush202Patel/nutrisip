import React, { useState } from 'react';
import './LoginPopup.css';

const LoginPopup = ({ setShowLogin }) => {
  // State to toggle between Login and Sign Up
  const [currState, setCurrState] = useState("Sign Up");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Successfully submitted ${currState} form!`);
    // Later, you will connect this to your backend database
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={handleSubmit}>
        
        {/* Header Section */}
        <div className="login-popup-title">
          <h2>{currState}</h2>
          {/* Clicking this X tells App.jsx to hide the popup */}
          <span onClick={() => setShowLogin(false)} className="close-btn">✖</span>
        </div>

        {/* Input Fields */}
        <div className="login-popup-inputs">
          {/* Only show the Name field if the user is Signing Up */}
          {currState === "Sign Up" && (
            <input type="text" placeholder="Your name" required />
          )}
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Password" required />
        </div>

        {/* Submit Button */}
        <button type="submit" className="login-submit-btn">
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>

        {/* Terms and Conditions */}
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>

        {/* Toggle Logic */}
        {currState === "Login" ? (
          <p className="toggle-text">
            Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p className="toggle-text">
            Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}

      </form>
    </div>
  );
};

export default LoginPopup;