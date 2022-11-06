// rfce - to emmit basic code. Write html in div

import React from 'react';
import "./Home.css";
import Product from './Product';



function Home() {
  return (
    <div className='home'>
      <div className="home_container">
        <img className='home_img' src="https://cdn.technadu.com/wp-content/uploads/2018/07/Amazon-Prime-Day-2018-Featured-Banner.jpg" alt="" />
     
      </div>
        <div className="home_row">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
         
          
        </div>

    </div>
  )
}

export default Home
