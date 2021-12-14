import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchItem } from '../store/cartItem'

class CartItem extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.fetchItem(this.props.productId)
  }
  render() {
    const { product, qty } = this.props
    const price = (product.price / 100).toFixed(2)
    const subtotal = ((qty * product.price) / 100).toFixed(2)
    console.log('props in cartItem', this.props)
    return (
      <div className="flex-container cartItem">
        <img src={product.imageUrl} />
        <h4>{product.name}</h4>
        <small>{qty}</small>
        <small>${price}</small>
        <small>${subtotal}</small>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    product: state.singleProduct,
  }
}

const mapDispatch = (dispatch) => {
  return {
    fetchItem: (productId) => dispatch(fetchItem(productId)),
  }
}

export default connect(mapState, mapDispatch)(CartItem)
