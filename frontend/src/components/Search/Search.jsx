import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Search.css';

const Search = ({ juiceData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  // Filter and Sort logic
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredResults([]);
      setShowDropdown(false);
      return;
    }

    const results = juiceData
      .filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically

    setFilteredResults(results);
    setShowDropdown(true);
  }, [searchTerm, juiceData]);

  return (
    <div className="search-container">
      <div className="search-input-wrapper">
        <input
          type="text"
          placeholder="Search for juice..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => searchTerm && setShowDropdown(true)}
        />
        <button className="search-btn">🔍</button>
      </div>

      {/* Dropdown List */}
      {showDropdown && filteredResults.length > 0 && (
        <ul className="search-dropdown">
          {filteredResults.map((item) => (
            <li key={item.id} onClick={() => setShowDropdown(false)}>
              <Link to={`/product/${item.name}`} className="dropdown-item">
                <img src={item.image} alt={item.name} className="dropdown-img" />
                <div className="dropdown-info">
                  <p className="dropdown-name">{item.name}</p>
                  <p className="dropdown-price">₹{item.price}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* No Results Case */}
      {showDropdown && searchTerm && filteredResults.length === 0 && (
        <div className="search-dropdown no-results">
          No juices found.
        </div>
      )}
    </div>
  );
};

export default Search;