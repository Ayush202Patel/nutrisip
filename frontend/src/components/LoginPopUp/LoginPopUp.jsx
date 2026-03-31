import React, { useState } from 'react';
import './LoginPopup.css';
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // New state for visibility
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();

  // Regex: Start with letter/_ , followed by any amount of letter/_/number
  const nameRegex = /^[a-zA-Z_][a-zA-Z0-9_]*$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  const allowedDomains = ["gmail.com", "hotmail.com", "yahoo.com", "outlook.com"];
  const userDomain = email.split('@')[1]?.toLowerCase();

  if (currState === "Sign Up") {
    if (!name.trim()) {
      return toast.error("Name is required");
    }
    // Check the new Regex
    if (!nameRegex.test(name)) {
      return toast.error("Name must start with a letter or underscore and contains no special characters");
    }
  }

  if (!emailRegex.test(email)) {
    return toast.error("Invalid email format");
  }

  if (!allowedDomains.includes(userDomain)) {
    return toast.error("Only Gmail, Hotmail, and Yahoo accounts are permitted");
  }

  if (password.length < 6) {
    return toast.error("Password must be at least 6 characters");
  }

  try {
    let endPoint = currState === "Sign Up" ? "registerUser" : "loginUser";
    let data = currState === "Sign Up" ? { email, name, password } : { email, password };
    
    let URL = `http://localhost:4000/api/v1/${endPoint}`;
    const res = await axios.post(URL, data);
    
    toast.success(res.data.message);
    setShowLogin(false);
    navigate("/");      
  } catch (error) {
    toast.error(error.response?.data?.message || "Operation failed");
  }
};

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <span onClick={() => setShowLogin(false)} className="close-btn">✖</span>
        </div>

        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Your name" 
              required 
            />
          )}
          
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Your email" 
            required 
          />

          <div className="password-input-wrapper" style={{ position: 'relative' }}>
            <input 
              type={showPassword ? "text" : "password"} // Dynamic type
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Password" 
              required 
              style={{ width: '100%' }}
            />
            <span 
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
                fontSize: '0.8rem',
                color: '#555'
              }}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>
        </div>

        <button type="submit" className="login-submit-btn">
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>

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