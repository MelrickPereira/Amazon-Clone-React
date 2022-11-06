import React from 'react'
import "./Product.css"
import StarIcon from '@mui/icons-material/Star';

function Product({id,title,price,image,description,rating}) {
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
            <button>add item</button>
        </div>
      </div>
    </div>
  )
}

export default Product
