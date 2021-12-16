import React from 'react'
import { connect } from 'react-redux'
import { fetchOrders } from '../store/myorders'

class MyOrders extends React.Component {
  constructor() {
    super()
  }
  componentDidMount() {
    this.props.getOrders(this.props.userId)
  }
  render() {
    const { orders } = this.props
    return (
      <div>
        {orders.map(order => (
          <div key={order.id}>
            Order Number: {order.id} <br />
            Order Items: <br />
            <ul>
              {order.orderItems.map(orderItem => (
                <li key={orderItem.groceryId}>
                  <img src={orderItem.grocery.imageUrl} /> <br />
                  {orderItem.grocery.name} <br />
                  {orderItem.quantity}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    userId: state.auth.id,
    orders: state.orders
  }
}

const mapDispatch = (dispatch) => {
  return {
    getOrders: (userId) => dispatch(fetchOrders(userId))
  }
}

export default connect (mapState, mapDispatch)(MyOrders)
