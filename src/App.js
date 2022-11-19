import './App.css';
import React from 'react';
import Header from './Header';
import Home from './Home'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';

function App(){
 
  return (
  <BrowserRouter>
  
    <Routes>
      <Route path="/Amazon-Clone-React/" element={<> <Header /> <Home /> </>} />
      <Route path="/Amazon-Clone-React/checkout" element={<> <Header /> <Checkout /> </>} />
      <Route path="/Amazon-Clone-React/login" element={<> <Login /></>} />
     
    </Routes>
  </BrowserRouter>
);
}

export default App;
