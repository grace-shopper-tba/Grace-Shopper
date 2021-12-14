import React from 'react'
import { connect } from 'react-redux'
import { fetchCart } from '../store/cart'
import CartItem from './CartItem'

class Cart extends React.Component {
  componentDidMount() {
    this.props.getCart(this.props.user.id)
  }

  render() {
    const { cart, user } = this.props
    console.log('props in cart', this.props)

    //we can check to see if user is not logged in, if not logged in, get info from local storage
    return (
      <div>
        <h2>Shopping Cart</h2>
        <h3>Items</h3>
        <div>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              productId={item.groceryId}
              qty={item.quantity}
            />
          ))}
        </div>
        <div className="flex-container cart-info">
          <h3>Recipient Information</h3>
          <div className="flex-container input">
            <label htmlFor="firstName">First Name</label>
            <input
              name="firstName"
              autoComplete={user.firstName ? user.firstName : null}
              placeholder={user.firstName}
            />
          </div>
          <div className="flex-container input">
            <label htmlFor="lastName">Last Name</label>
            <input
              name="lastName"
              autoComplete={user.lastName ? user.lastName : null}
              placeholder={user.lastName}
            />
          </div>
          <div className="flex-container input">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              autoComplete={user.phoneNumber ? user.phoneNumber : null}
              placeholder={
                user.phoneNumber ? user.phoneNumber : 'Enter Phone Number'
              }
            />
          </div>
        </div>
        <div>
          <h3>Shipping Address</h3>
          <div className="flex-container input">
            <label htmlFor="address">Address</label>
            <input
              autoComplete={user.address ? user.address : null}
              placeholder={user.address ? user.address : 'Enter Address'}
            />
          </div>
        </div>
        <div className="flex-container buttons">
          <button>Checkout</button>
          <button>Edit Cart</button>
        </div>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    cart: state.cart,
    user: state.auth,
    products: state.products,
    isLoggedIn: !!state.auth.id,
  }
}

const mapDispatch = (dispatch) => {
  return {
    getCart: (userId) => dispatch(fetchCart(userId)),
  }
}

export default connect(mapState, mapDispatch)(Cart)
