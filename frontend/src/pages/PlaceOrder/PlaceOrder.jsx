import React, { useContext } from 'react';
import { CartContext } from "../../context/CartContext";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const { cartItems } = useContext(CartContext);

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const deliveryFee = subtotal === 0 ? 0 : 40;
  const total = subtotal + deliveryFee;

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <h2 className="title">Delivery Information</h2>
        <div className="multi-fields">
          <input type="text" placeholder='First name' required />
          <input type="text" placeholder='Last name' required />
        </div>
        <input type="email" placeholder='Email address' required />
        <input type="text" placeholder='Street' required />
        <div className="multi-fields">
          <input type="text" placeholder='City' required />
          <input type="text" placeholder='State' required />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip code' required />
          <input type="text" placeholder='Country' required />
        </div>
        <input type="text" placeholder='Phone' required />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>₹{subtotal}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>₹{deliveryFee}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b>₹{total}</b>
          </div>
          <button type="submit" className="payment-btn">PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;