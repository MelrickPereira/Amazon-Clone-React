import React from 'react'
import "./Checkout_item.css"
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from "./StateProvider";

function Checkout_item(img,title,description,rating) {
    const [{basket},dispatch] = useStateValue(0);
    const removeFromBasket = () =>
{

}
  return (
    <div className='Checkout_item'>
        <img className = "Checkout_product_img" src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg" alt="" />
        <div className='Product_info'>
            <strong>Title</strong>
            <p>Description</p>
            <p>Price: $99.99 </p>
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
