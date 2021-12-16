import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../store/cart'
import { fetchSingleProduct } from '../store/singleProduct'

class SingleProduct extends React.Component {
  constructor(props) {
    super(props),
      (this.state = {
        quantity: 1,
      })
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.addToCart = this.addToCart.bind(this)
  }
  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId)
  }
  increment() {
    this.setState({
      quantity: this.state.quantity + 1,
    })
  }
  decrement() {
    if (this.state.quantity > 1) {
      this.setState({
        quantity: this.state.quantity - 1,
      })
    }
  }
  addToCart() {
    const item = {
      userId: this.props.userId,
      groceryId: this.props.product.id,
      quantity: this.state.quantity,
      subtotal: this.state.quantity * this.props.product.price * 100,
    }
    this.props.addItem(item)
  }
  render() {
    const { product } = this.props
    return (
      <div className="flex-container single-product-container">
        <div>
          <img src={product.imageUrl} />
          <div className="flex-container" id="add-to-cart-container">
            <button
              className="quantity-decrement-button"
              onClick={this.decrement}
            >
              -
            </button>
            <p>{this.state.quantity}</p>
            <button
              className="quantity-increment-button"
              onClick={this.increment}
            >
              +
            </button>
            <button id="add-to-cart-button" onClick={this.addToCart}>
              Add to Cart
            </button>
          </div>
        </div>

        <div>
          <h1>{product.name}</h1>
          <p>Season: {product.season}</p>
          <p>Price: ${product.price}</p>
        </div>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    product: state.singleProduct,
    userId: state.auth.id,
  }
}

const mapDispatch = (dispatch) => {
  return {
    fetchProduct: (id) => dispatch(fetchSingleProduct(id)),
    addItem: (item) => dispatch(addToCart(item)),
  }
}

export default connect(mapState, mapDispatch)(SingleProduct)
