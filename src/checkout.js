import React, { useState } from "react";
import "./checkout.css";
import Subtotal from "./subtotal";
import CheckoutProduct from "./checkoutproduct";
import { useStateValue } from "./stateprovider";

function Checkout() {
    const [{basket}, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout__ad"
        />
        <div>
          <h2 className="checkout__title">Your Shopping Cart</h2>
          
          {basket.map((item) => (<CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating} />))}
        </div>
      </div>

      <div>
        <Subtotal />
      </div>

    </div>
  );
}

export default Checkout;
