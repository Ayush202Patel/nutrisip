import React from 'react'
import "./JuiceItem.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const JuiceItem = ({id,name,price,description,image,rating}) => {
    const renderStars = () => {
    const stars = []
    for (let i = 0; i < rating; i++) {
      stars.push(
        < FontAwesomeIcon key={i} icon={faStar} className="star" />
      )
    }
    return stars
  }
    return (
    <div className="product-card">
  <img src={image} alt={name} className="product-image" />

  <div className="product-info">
    <h3 className="product-name">{name} Juice</h3>

    <div className="price-rating">
      <span className="price">₹{price}</span>
      <div className="rating">
        {renderStars()}
      </div>
    </div>

    <p className="description">{description}</p>

    <button className="add-btn">+</button>
  </div>
</div>

  )
}

export default JuiceItem
