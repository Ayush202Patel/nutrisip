import React from 'react';
import { juices } from '../../assets/assets';
import JuiceItem from '../JuiceItem/JuiceItem';
import "./JuiceDisplay.css";

const JuiceDisplay = () => {
  return (
    <div className='juice-display-home'>
      <div className='juice-display'>
        {juices.map((item) => (
          <JuiceItem
            key={item.name} // Use name as the React key
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