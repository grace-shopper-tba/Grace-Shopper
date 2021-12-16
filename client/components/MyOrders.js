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
    // const { orders } = this.props
    return (
      <div>
        hi placeholder
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
