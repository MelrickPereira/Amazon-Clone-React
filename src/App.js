import './App.css';
import React from 'react';
import Header from './Header'
import Home from './Home';

function App() {
  return (
    //BEM convention
    <div className="app">
    
      <Header />
      <Home />
     
    </div>
  );
}

export default App;
