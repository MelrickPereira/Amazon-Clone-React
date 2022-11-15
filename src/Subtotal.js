import React from 'react';
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import {getBasketTotal , Total} from "./reducer"



function Subtotal() {
  const [{basket},dispatch] = useStateValue(0);
    
  return (
    <div className='subtotal'>
      
    <p className='checkbox_item'>Subtotal ({basket.length} item): ${Total}</p> 
    <p className='checkbox_item check'><input type="checkbox" /> This order contains a gift</p>
    <button className = 'checkbox_item' >Proceed to Buy</button>
    </div>
  )
}

export default Subtotal
