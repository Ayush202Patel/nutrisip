import React, { useContext } from 'react';
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';
import "./JuiceItem.css";

const JuiceItem = ({ name, price, image, description, rating = 0, category = "Fresh Juice" }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const itemInCart = cartItems.find((i) => i.name === name);

  // Create a URL-friendly ID for the scroll-to-feature
  // Example: "Guava Juice" becomes "guava-juice"
  const productId = name.replace(/\s+/g, '-').toLowerCase();

  const handleAddToCart = () => {
    addToCart({ name, price, image });
  };

  const renderStars = (num) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={i < Math.floor(num) ? "star filled" : "star"}>
        ★
      </span>
    ));
  };

  return (
    /* Added the dynamic ID here for the Search Redirection */
    <div id={productId} className="juice-card">
      
      {rating >= 4.5 && <div className="best-seller-badge">Bestseller</div>}
      
      {/* Wrapped image in a Link to Shop for better navigation */}
      <Link to="/shop" className="juice-image-link">
        <div className="juice-image-wrapper">
          <img src={image} alt={name} className="juice-image" />
        </div>
      </Link>

      <div className="juice-info">
        <div className="juice-header">
          <span className="juice-category">{category}</span>
          <div className="juice-rating">{renderStars(rating)}</div>
        </div>

        <Link to="/shop" className="juice-title-link">
          <h3 className="juice-title">{name}</h3>
        </Link>
        
        <p className="juice-desc">{description}</p>

        <div className="juice-footer">
          <div className="price-tag">
            <span className="currency">₹</span>
            <span className="amount">{price}</span>
          </div>

          <div className="action-area">
            {!itemInCart ? (
              <button className="add-btn-minimal" onClick={handleAddToCart}>
                <span className="plus-icon">+</span> Add
              </button>
            ) : (
              <div className="modern-qty-selector">
                <button onClick={() => removeFromCart(name)}>−</button>
                <span>{itemInCart.quantity}</span>
                <button onClick={handleAddToCart}>+</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JuiceItem;