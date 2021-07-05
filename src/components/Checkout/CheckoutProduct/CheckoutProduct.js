import React from 'react';
import { useStateValue } from '../../../StateProvider';
import "./CheckoutProduct.css"

const CheckoutProduct = (props) => {

    const [{basket}, dispatch]= useStateValue(); 

 console.log(props.data)
  const removeFromBasket=()=>{
      console.log("clicked")
         dispatch({
             type:"REMOVE_FROM_BASKET",
             id:props.data.id,
         })
  }

    return (
        <div className="CheckoutProduct">
             <img className="CheckoutProduct_image" src={props.data.image}/>
        <div className="CheckoutProduct_info">
            <p className="CheckoutProduct_title">{props.data.title}</p>
            <p className="CheckoutProduct_price">
                <small>$</small>
                <strong>{props.data.price}</strong>
            </p>
            <div className="CheckoutProduct_rating">
                   {Array(props.data.rating).fill().map((_,i)=>(
                       <p>&#58165;</p>
                   ))}

            </div>
            <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
       </div> 
    );
};

export default CheckoutProduct;