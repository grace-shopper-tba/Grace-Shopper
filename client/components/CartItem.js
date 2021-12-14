import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSingleProduct } from '../store/singleProduct'

class CartItem extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.fetchProduct(this.props.productId)
  }
  render() {
    const { product, qty } = this.props
    const price = (product.price / 100).toFixed(2)
    const subtotal = ((qty * product.price) / 100).toFixed(2)

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
    fetchProduct: (id) => dispatch(fetchSingleProduct(id)),
  }
}

export default connect(mapState, mapDispatch)(CartItem)
