import React, { Component } from 'react'

class Cart extends Component {
  render() {
    return (
      <div>
        <h2>Shopping Cart</h2>
        <div>
          <h3>Items</h3>
          <div>
            <small>Item1</small>
          </div>
          <div>
            <small>Item2</small>
          </div>
        </div>
        <div>
          <h3>Receipient Information</h3>
          <p>John Smith</p>
          <p>Phone Number</p>
        </div>
        <div>
          <h3>Shipping Address</h3>
          <p>John</p>
          <p>Smith</p>
          <p>Address</p>
        </div>
        <button>Checkout</button>
        <button>Cancel</button>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    cart: state.cart,
  }
}
