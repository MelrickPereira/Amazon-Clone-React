import React from 'react'
import "./Product.css"
function Product() {
  return (
    <div className='product'>
      <div className="product_info">
        <div className="product_title"> Title </div>
        <div className="product_price">$<strong>99.99</strong></div>
        <div className="product_img">
            <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg" alt="" />
        </div>
        <div className="product_button">
            <button>add item</button>
        </div>
      </div>
    </div>
  )
}

export default Product
