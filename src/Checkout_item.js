import React from 'react'
import "./Checkout_item.css"
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from "./StateProvider";

function Checkout_item({id,title,price,image,description,rating}) {
    const [{basket},dispatch] = useStateValue(0);
    const removeFromBasket = () =>
{

}
  return (
    <div className='Checkout_item'>
        <img className = "Checkout_product_img" src={image} alt="" />
        <div className='Product_info'>
            <strong>{title}</strong>
            <p>{description}</p>
            <p>Price: ${price}</p>
            <div className='product_rating'>
                {Array(rating).fill().map((_,i)=>(
                <StarIcon />
                ))}
            </div>
            <div className="remove_btn">
                <button onClick={removeFromBasket}>remove item</button>
            </div>
        </div> 
    </div>
 )
}

export default Checkout_item
