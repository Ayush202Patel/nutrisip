import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Cart from './pages/Cart/Cart';
import Contact from './pages/Contact/Contact';
import About from './pages/AboutUs/About';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopUp/LoginPopUp';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
const App = () => {
  // Add this state to track if the popup should be shown
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {/* If showLogin is true, render the popup on top of everything */}
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      
      <div className="app">
        {/* Pass the setter function to the Navbar so it can open the popup */}
        <Navbar setShowLogin={setShowLogin} />
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutUs" element={<About />} />
          <Route path='/placeOrder' element={<PlaceOrder/>} />
        </Routes>
      </div>
      
      <Footer />
    </>
  );
};

export default App;