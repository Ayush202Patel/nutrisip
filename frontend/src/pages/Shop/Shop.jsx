import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import JuiceDisplay from '../../components/JuiceDisplay/JuiceDisplay';
import './Shop.css';

const Shop = () => {
  const { hash } = useLocation();
  // State to track the sorting method
  const [sortType, setSortType] = useState("default");

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          element.classList.add('highlight-product');
          setTimeout(() => element.classList.remove('highlight-product'), 2000);
        }
      }, 300);
    }
  }, [hash]);

  return (
    <div className="shop-page">
      <div className="shop-banner">
        <div className="shop-banner-content">
          <h1>Shop Fresh Juices</h1>
          <p>
            Explore our variety of healthy, delicious, and 100% natural fruit juices. 
            Freshly squeezed to order and delivered right to your door.
          </p>
        </div>
      </div>

      <div className="shop-products-container">
        <div className="shop-products-header">
          <h2>All Products</h2>
          
          {/* Custom Sorting Filter */}
          <div className="shop-sort-container">
            <label htmlFor="sort">Sort by:</label>
            <select 
              id="sort" 
              onChange={(e) => setSortType(e.target.value)} 
              className="shop-sort-select"
            >
              <option value="default">Featured</option>
              <option value="name-asc">Name (A-Z)</option>
              <option value="name-desc">Name (Z-A)</option>
              <option value="price-low">Price (Low to High)</option>
              <option value="price-high">Price (High to Low)</option>
            </select>
          </div>
        </div>
        
        {/* Pass the sortType as a prop to your display component */}
        <JuiceDisplay sortType={sortType} />
      </div>
    </div>
  );
}

export default Shop;