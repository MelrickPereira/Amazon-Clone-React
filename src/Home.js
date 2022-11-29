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
            <Product 
            title="Title 1" 
            price={99.99}
            rating = {5}
            image = "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg"
            description="100 MP Camera"
            />

<Product 
            title="Title 2" 
            price={99.99}
            rating = {5}
            image = "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg"
            description="100 MP Camera"
            />

<Product 
            title="Title  3" 
            price={99.99}
            rating = {5}
            image = "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg"
            description="100 MP Camera"
            />

          <Product 
            title="Title 4" 
            price={99.99}
            rating = {5}
            image = "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg"
            description="100 MP Camera"
            />

<Product 
            title="Title 4" 
            price={99.99}
            rating = {5}
            image = "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg"
            description="100 MP Camera"
            />
<Product 
            title="Title 4" 
            price={99.99}
            rating = {5}
            image = "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg"
            description="100 MP Camera"
            />
<Product 
            title="Title 4" 
            price={99.99}
            rating = {5}
            image = "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg"
            description="100 MP Camera"
            />
<Product 
            title="Title 4" 
            price={99.99}
            rating = {5}
            image = "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg"
            description="100 MP Camera"
            />
<Product 
            title="Title 4" 
            price={99.99}
            rating = {5}
            image = "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg"
            description="100 MP Camera"
            />
<Product 
            title="Title 4" 
            price={99.99}
            rating = {5}
            image = "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg"
            description="100 MP Camera"
            />
<Product 
            title="Title 4" 
            price={99.99}
            rating = {5}
            image = "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg"
            description="100 MP Camera"
            />

        </div>

        
    
    </div>
  )
}

export default Home
