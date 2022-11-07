import React from 'react';
import "./Subtotal.css";

function Subtotal({value,prefix,price}) {
  return (
    <div className='subtotal'>
    <p className='checkbox_item'>Subtotal ({value} item): {prefix}{price}</p> 
    <p className='checkbox_item check'><input type="checkbox" /> This order contains a gift</p>
    <button checkbox_item >Proceed to Buy</button>
    </div>
  )
}

export default Subtotal
