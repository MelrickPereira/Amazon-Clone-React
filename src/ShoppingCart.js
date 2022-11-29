import React from 'react'
import "./ShoppingCart.css";
import Checkout_item from './Checkout_item';
import {useStateValue} from './StateProvider'
function ShoppingCart() {
  const [{basket},dispatch] = useStateValue(0);

  return (
    <div className='shopping_cart'>
        <div className='Checkout_heading' >
            Shopping Cart
        </div>
        <div className='product_rating'>
          {Array(basket.length).fill().map((_,i)=>(
            <Checkout_item title = {basket[i].title} price = {basket[i].price} image = {basket[i].image} description = {basket[i].description} rating = {basket[i].rating} />
          ))}
        
        </div>
    </div>
  )
}

export default ShoppingCart
