import React from 'react';
import JuiceDisplay from '../../components/JuiceDisplay/JuiceDisplay';
import './Shop.css';

const Shop = () => {
  return (
    <div className="shop-page">
      
      {/* Storefront Banner */}
      <div className="shop-banner">
        <div className="shop-banner-content">
          <h1>Shop Fresh Juices</h1>
          <p>
            Explore our variety of healthy, delicious, and 100% natural fruit juices. 
            Freshly squeezed to order and delivered right to your door.
          </p>
        </div>
      </div>

      {/* Product Display Section */}
      <div className="shop-products-container">
        {/* We can add a filter or search bar here later if you want! */}
        <div className="shop-products-header">
          <h2>All Products</h2>
          <span className="product-count">Showing all juices</span>
        </div>
        
        <JuiceDisplay />
      </div>

    </div>
  );
}

export default Shop;