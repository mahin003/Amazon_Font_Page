import React from 'react';
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../../../StateProvider';
import { getBasketTotal } from '../../../reducer';

const Subtotal = () => {
    const [{basket}, dispatch]= useStateValue();

    return (
        <div className="subtotal">
            <h2>Subtotal</h2>
            <CurrencyFormat
            renderText={(value)=>(
             <>
             <p>
               Subtotal ({basket?.length} items):<strong>{value}</strong> 
                </p>   
              <small className="subtotal_gift">
                  <input type="checkbox"/> This Order COntains gift 
                  </small>   
                </>  
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />
            <button>proceed to checkout</button>
        </div>
    );
};

export default Subtotal;