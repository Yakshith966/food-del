import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({id,name,price,desc,image}) => {

     const {cartItems,addToCart,removeFromCart} =useContext(StoreContext);
  return (
    <div className='food-item'>
     <div className="food-item-image-container">
          <img src={image} className='food-item-image' alt="" />
          { !cartItems[id]
              ?<img className='add' src={assets.add_icon_white} onClick={()=>addToCart(id)} alt='' />
              :<div className='food-item-counter'>
               <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" srcset="" />
               <p>{cartItems[id]}</p>
               <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" srcset="" />
              </div>
          }
     </div>
     <div className="food-item-info">
          <div className="food-item-name-rating">
               <p>{name}</p>
               <img src={assets.rating_starts} alt="" />
          </div>
          <p className="food-item-description">
               {desc}
          </p>
          <p className="food-item-price">
               ${price}
          </p>
     </div>
    </div>
  )
}

export default FoodItem