
import "./Product.css"
import StarIcon from '@mui/icons-material/Star';
import { useState } from "react";
export let count = 0;

function Product({id,title,price,image,description,rating}) {

  const [state,setCount] = useState(0);

  return (
    <div className='product'>
      <div className="product_info">
        <div className="product_title">{title} </div>
        <div className="product_price">$<strong>{price}</strong></div>
        <div className="product_img">
            <img src={image} alt="" />
        </div>
        <div className="product_description">
            <p>{description}</p>
        </div>
        <div className='product_rating'>
          {Array(rating).fill().map((_,i)=>(
            <StarIcon />
          ))}
        
        </div>
       
        <div className="add_to_cart_btn">
            <button onClick={() => 
              {
                setCount(state + 1);
                count++;
                document.getElementById("header_basket_count").innerHTML = count;
              }}>add item</button>
        </div>
      </div>
    </div>
  )
}

export default Product
