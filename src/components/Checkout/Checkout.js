import React from 'react';
import { useStateValue } from '../../StateProvider';
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct/CheckoutProduct';
import Subtotal from './Subtotal/Subtotal';

const Checkout = () => {
    const [{basket}, dispatch]= useStateValue();

    return (
        <div className="checkout">
           <div className="checkout_left">
               <img className="checkout_ad" src="https://www.adweek.com/wp-content/uploads/2020/02/coronavirus-amazon-shopping-behavior-CONTENT-2020.jpg.webp"/>
               <div>
                   <h2 className="checkout_title">
                       Your Shoppng basket
                   </h2>
                   {console.log({basket})}
                  {
                    basket.map(item=>(
                        <CheckoutProduct data={item}
                      ></CheckoutProduct>
                    )) 
                  } 
                   
               </div>
           </div>

           <div className="checkout_right">
               <Subtotal></Subtotal>
           </div>
        </div>
    );
};

export default Checkout;