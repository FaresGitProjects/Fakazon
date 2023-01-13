import React from 'react'
import "./subtotal.css";
import {useStateValue} from './stateprovider';
import { getSubtotal } from './reducer';
import { useNavigate } from 'react-router-dom';

export const formatter = new Intl.NumberFormat('en-US',{
    style: 'currency',
    currency: 'USD',
})


function Subtotal() {
    const navigate = useNavigate();
    const [{basket}, dispatch] = useStateValue();


    // let sum = 0;

    // for(const item in basket) { sum += basket[item].price; }


    return (
        <div className="subtotal">
            <div className='subtotal__order'>Subtotal ({basket?.length} items): <strong>{formatter.format(getSubtotal(basket))}</strong></div>
            <span className='subtotal__gift'>
                <input type="checkbox" /> This order contains a gift
            </span>
            <button onClick={e => navigate("/payment")}className="subtotalButton"> Proceed to Checkout </button>
        </div>
    )
}

export default Subtotal;