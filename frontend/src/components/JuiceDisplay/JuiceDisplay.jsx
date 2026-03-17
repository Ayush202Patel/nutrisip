import React from 'react';
import { juices } from '../../assets/assets';
import JuiceItem from '../JuiceItem/JuiceItem';
import "./JuiceDisplay.css";

const JuiceDisplay = ({ sortType = "default" }) => {
  
  // 1. Create a sorted copy of the juices list
  const sortedJuices = [...juices].sort((a, b) => {
    switch (sortType) {
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      default:
        return 0; // "Featured" or default order
    }
  });

  return (
    <div className='juice-display-home'>
      <div className='juice-display'>
        {/* 2. Map over the sortedJuices instead of the original juices */}
        {sortedJuices.map((item) => (
          <JuiceItem
            key={item.name} 
            name={item.name}
            price={item.price}
            description={item.description}
            image={item.image}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default JuiceDisplay;