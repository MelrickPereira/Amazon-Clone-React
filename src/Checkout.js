import React from 'react';
import "./Checkout.css";
import ShoppingCart from './ShoppingCart';
import Subtotal from './Subtotal';




function Checkout() {
 
  return (
    <div className='Checkout_page'>
     <div className='shopping_cart'><ShoppingCart /></div> 
      <div className='Checkout_container'>
      <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout
