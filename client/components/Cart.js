import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchCart } from '../store/cart'
//component has been tested for logged in user with active cart, admin user with empty cart
//yet to add- ability for visitor to view cart (approach- if not logged in, create empty order)
//add to cart functionality - thunks needs to be created
class Cart extends React.Component {
  componentDidMount() {
    this.props.getCart(this.props.match.params.userId)
  }

  render() {
    const cart = this.props.cart[0]
    console.log(this.props.cart)
    console.log('cart --->', cart)
    return (
      <div>
        <h2>Shopping Cart</h2>
        <div>
          <h3>Items</h3>
          {cart ? (
            cart.orderItems.map((item) => (
              <div key={item.id} className="flex-container cartItem">
                <img src={item.grocery.imageUrl} />
                <h4>{item.grocery.name}</h4>
                <small>{item.quantity}</small>
                <small>${(item.grocery.price / 100).toFixed(2)}</small>
                <small>
                  ${((item.grocery.price * item.quantity) / 100).toFixed(2)}
                </small>
              </div>
            ))
          ) : (
            <small>
              Your cart is empty. See <Link to="/products">products</Link> to
              start shopping
            </small>
          )}
        </div>
        {cart && (
          <div>
            <h3>Recipient Information</h3>
            <div className="flex-container cartInfo">
              <h5>First Name</h5>
              <p>{cart.user.firstName}</p>
            </div>
            <div className="flex-container cartInfo">
              <h5>Last Name</h5>
              <p>
                {cart.user.lastName ? (
                  cart.user.lastName
                ) : (
                  <input placeholder="Last Name" />
                )}
              </p>
            </div>
            <div className="flex-container cartInfo">
              <h5>Phone Number</h5>
              <p>
                {cart.user.phoneNumber ? (
                  cart.user.phoneNumber
                ) : (
                  <input placeholder="Phone Number" />
                )}
              </p>
            </div>
          </div>
        )}
        {cart && (
          <div>
            <h3>Shipping Address</h3>
            <span>{cart.user.firstName}</span>
            <span>{cart.user.lastName ? cart.user.lastName : null}</span>
            <p>
              {cart.user.address ? (
                cart.user.address
              ) : (
                <input placeholder="Address" />
              )}
            </p>
          </div>
        )}
        <button>Checkout</button>
        <button>Cancel</button>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    cart: state.cart,
    isLoggedIn: !!state.auth.id,
    // userId: state.auth.id,
  }
}

const mapDispatch = (dispatch) => {
  return {
    getCart: (userId) => dispatch(fetchCart(userId)),
  }
}

export default connect(mapState, mapDispatch)(Cart)
