import React, { useContext } from 'react';
import { CartContext } from "../../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  // 1. Calculate the Subtotal
  // This multiplies each item's price by its quantity and adds them all together
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  
  // 2. Set Delivery Fee (Free if cart is empty, otherwise ₹40)
  const deliveryFee = subtotal === 0 ? 0 : 40; 
  
  // 3. Final Total
  const total = subtotal + deliveryFee;

  // If the cart is empty, show a friendly message
  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your Cart is Empty 🛒</h2>
        <p>Looks like you haven't added any fresh juices yet!</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      
      {/* Left Side: Cart Items List */}
      <div className="cart-items-section">
        <h2 className="cart-title">Your Cart</h2>
        
        {/* Table Headers */}
        <div className="cart-header-grid">
          <p>Product</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>
        <hr className="cart-hr" />
        
        {/* Map through the items in the cart */}
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item-row">
            <img src={item.image} alt={item.name} className="cart-item-img" />
            <p className="cart-item-name">{item.name}</p>
            <p className="cart-item-price">₹{item.price}</p>
            
            {/* Cart Counter Controls */}
            <div className="cart-counter">
              <button onClick={() => removeFromCart(item.name)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => addToCart(item)}>+</button>
            </div>
            
            <p className="cart-item-total">₹{item.price * item.quantity}</p>
          </div>
        ))}
      </div>

      {/* Right Side: Order Summary */}
      <div className="cart-summary-section">
        <h2>Order Summary</h2>
        <div className="summary-box">
          <div className="summary-row">
            <p>Subtotal</p>
            <p>₹{subtotal}</p>
          </div>
          <hr className="summary-hr" />
          <div className="summary-row">
            <p>Delivery Fee</p>
            <p>₹{deliveryFee}</p>
          </div>
          <hr className="summary-hr" />
          <div className="summary-row total-row">
            <p>Total</p>
            <p>₹{total}</p>
          </div>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>

    </div>
  );
};

export default Cart;