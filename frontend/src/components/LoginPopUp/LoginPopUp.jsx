import React, { useState } from 'react';
import './LoginPopup.css';
import toast from "react-hot-toast"
import axios from "axios"
import {useNavigate} from "react-router-dom"
const LoginPopup = ({ setShowLogin }) => {
  // State to toggle between Login and Sign Up
  const [currState, setCurrState] = useState("Sign Up");
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();
  const handleSubmit=async (e)=>{
    e.preventDefault();
    try {
      let endPoint="";
      let data={}
      if(currState=="Sign Up"){
         endPoint="registerUser";
         data={email,name,password}
      }else{
         endPoint="loginUser";
         data={email,password}
      }
      let URL=`http://localhost:4000/api/v1/${endPoint}`;
      const res=await axios.post(URL,data);
      toast.success(res.data.message);
      navigate("/");      
    } catch (error) {
      toast.error(error.response?.data?.message)
    }
  }
  
  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={handleSubmit}>
        
        {/* Header Section */}
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <span onClick={() => setShowLogin(false)} className="close-btn">✖</span>
        </div>

        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
            <input type="text"  value={name} onChange={(e)=>setName(e.target.value)} placeholder="Your name"  />
          )}
          <input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Your email"  />
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"  />
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