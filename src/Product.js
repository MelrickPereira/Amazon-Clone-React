
import "./Product.css"
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from "./StateProvider";
import {getBasketTotal} from "./reducer"



export let count = 0;

function Product({id,title,price,image,description,rating}) {

  const [{basket},dispatch] = useStateValue(0);
  const addToBasket = () =>
  {
    //dispatch the item into the data layer
    dispatch(
      {
        type: "ADD_TO_CART",
        item:{
          id:id,
          title:title,
          price:price,
          image:image,
          description:description,
          rating:rating,
        }
      }
    )
   
  }
  getBasketTotal(basket)


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
            <button onClick={addToBasket}>add item</button>
        </div>
      </div>
    </div>
  )
}

export default Product
