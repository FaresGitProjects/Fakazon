import React from 'react'
import moment from 'moment/moment'
import { formatter } from './subtotal'
import { getSubtotal } from './reducer'
import { useStateValue } from './stateprovider'
import CheckoutProduct from './checkoutproduct'
/** CSS Import */

function Order({ order }) {
    const [{basket}, dispatch] = useStateValue();

  return (
    <div className='order'>
        <h2>Order</h2>
        <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
        <p className="order__id">
            <small>{order.id}</small>
        </p>
        {order.data.basket?.map(item => (
                <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.pricing}
                rating={item.rating} />
        ))}
    </div>
  )
}

export default Order;