import React, { useState } from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from "react-router-dom"
import {useStateValue} from './StateProvider'

function Header() {
  const [{basket},dispatch] = useStateValue();

  return (
    <div className='header'>
      <Link to="/Amazon-Clone-React">
      <img 
        className='header_logo' 
        src='https://wildfiresocial.com/wp-content/uploads/2019/01/amazon-logo-white._cb1509666198_.png'
      
      />
      </Link>
      
      <div className='header_search'> 
        <input className='header_search_input' type ="text"></input>
       <SearchIcon className='header_search_icon' />
      </div>
      <div className='header_nev'>
            <div className='header_option'>
                <span className='header_option_line1'>
                    Hello Guest
                </span>
                <span className='header_option_line2'>
                    Sign In
                </span>
            </div>
            <div className='header_option'>
            <span className='header_option_line1'>
                    Returns
                </span>
                <span className='header_option_line2'>
                    & Orders
                </span>
            </div>
            <div className='header_option'>
            <span className='header_option_line1'>
                    Your
                </span>
                <span className='header_option_line2'>
                    Prime
                </span>
            </div>
            <Link to="/Amazon-Clone-React/checkout">
            <div className='header_option_basket'>
              
              < ShoppingBasketIcon  />
            <span id="header_basket_count" className="header_option_line2 header_basket_count">
            {basket?.length}
            </span>
            
            </div>
            </Link>
            
      </div>
    </div>
  
  )
}

export default Header
