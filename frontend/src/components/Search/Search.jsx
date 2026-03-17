import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.css';

const Search = ({ juiceData, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const navigate = useNavigate();
  const searchRef = useRef(null);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredResults([]);
      return;
    }

    const results = juiceData
      .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
      .sort((a, b) => a.name.localeCompare(b.name));

    setFilteredResults(results);
  }, [searchTerm, juiceData]);

  const handleProductClick = (productName) => {
    // Redirects to shop page and targets the specific product ID
    navigate(`/shop#${productName.replace(/\s+/g, '-').toLowerCase()}`);
    onClose();
  };

  return (
    <div className="search-bar-wrapper" ref={searchRef}>
      <input
        type="text"
        placeholder="Search juice..."
        value={searchTerm}
        autoFocus
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {searchTerm && (
        <div className="search-dropdown">
          {filteredResults.length > 0 ? (
            filteredResults.map((item) => (
              <div 
                key={item.id} 
                className="dropdown-item"
                onClick={() => handleProductClick(item.name)}
                style={{ cursor: 'pointer' }}
              >
                <img src={item.image} alt={item.name} />
                <div className="item-info">
                  <p className="name">{item.name}</p>
                  <p className="price">₹{item.price}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="no-result">Not found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;