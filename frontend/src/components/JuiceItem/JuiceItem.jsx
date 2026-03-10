import React, { useContext } from 'react';
import { CartContext } from "../../context/CartContext";
import "./JuiceItem.css"; // Make sure to import the CSS!

const JuiceItem = ({ name, price, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  // Check if the item is already in the cart by its name
  const itemInCart = cartItems.find((i) => i.name === name);

  const handleAddToCart = () => {
    addToCart({ name, price, image });
  };

  return (
    <div className="juice-card">
      
      <div className="juice-image-container">
        <img src={image} alt={`${name} Juice`} className="juice-image" />
      </div>

      <div className="juice-details">
        <h3 className="juice-name">{name}</h3>
        <p className="juice-price">₹{price}</p>

        {/* Conditional Rendering: Show Add button OR the + / - counter */}
        {!itemInCart ? (
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        ) : (
          <div className="quantity-controls">
            <button className="qty-btn" onClick={() => removeFromCart(name)}>
              -
            </button>
            <span className="qty-count">{itemInCart.quantity}</span>
            <button className="qty-btn" onClick={handleAddToCart}>
              +
            </button>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default JuiceItem;