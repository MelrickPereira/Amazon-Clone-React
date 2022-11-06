import './App.css';
import React from 'react';
import Header from './Header';
import Home from './Home'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Checkout from './Checkout';

function App(){
 
  return (
  <BrowserRouter>
  <Header />
    <Routes>
      <Route path="/Amazon-Clone-React/" element={<Home />} />
      <Route path="/Amazon-Clone-React/checkout" element={<Checkout />} />
     
    </Routes>
  </BrowserRouter>
);
}

export default App;
