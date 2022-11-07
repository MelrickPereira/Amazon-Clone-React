import React from 'react'
import "./ShoppingCart.css";
import Product from './Product'

function ShoppingCart() {
  return (
    <div className='shopping_cart'>
        <div className='Checkout_heading'>
            Shopping Cart
        </div>
        <div className='item_info'>
            <Product title="Item" price={99.99}
            image="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg"
            rating={5}/>
        </div>
    </div>
  )
}

export default ShoppingCart
