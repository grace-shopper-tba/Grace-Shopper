import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchCart } from '../store/cart'
//component has been tested for logged in user with active cart, admin user with empty cart
//yet to add- ability for visitor to view cart (approach- if not logged in, create empty order)
//add to cart functionality - thunks needs to be created
class Cart extends React.Component {
  constructor() {
    super()
    this.state = {
      edit: false,
      newQuantity: 0,
    }
    this.handleEdit = this.handleEdit.bind(this)
    // this.increment = this.increment.bind(this)
    // this.decrement = this.decrement.bind(this)
  }
  componentDidMount() {
    this.props.getCart(this.props.match.params.userId)
  }

  handleEdit() {
    this.setState({ edit: !this.state.edit })
  }

  // increment() {
  //   this.setState({
  //     quantity: this.state.quantity + 1,
  //   })
  // }
  // decrement() {
  //   if (this.state.quantity > 1) {
  //     this.setState({
  //       quantity: this.state.quantity - 1,
  //     })
  //   }
  // }

  render() {
    const cart = this.props.cart.find((order) => order.active === true) || {}
    console.log('try to find the item qty -->', cart)
    let totalPrice = 0
    let totalQuantity = 0
    cart.orderItems
      ? cart.orderItems.forEach((element) => {
          totalPrice += element.subtotal
          totalQuantity += element.quantity
        })
      : null
    let newQuantity = 0
    return (
      <div className="grid-item">
        <h1>Shopping Cart</h1>
        <div>
          <h2>Items</h2>
          {cart.orderItems ? (
            <div>
              <table>
                <thead>
                  <tr>
                    {/* <th className="hidden">Image</th>
                  <th className="hidden">Item Name</th> */}
                    <th colSpan="3">Qty.</th>
                    <th>Unit Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.orderItems.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <img src={item.grocery.imageUrl} />
                      </td>
                      <td>
                        <h4>{item.grocery.name}</h4>
                      </td>
                      <td>
                        {this.state.edit ? (
                          <div
                            className="flex-container"
                            id="add-to-cart-container"
                          >
                            <button
                              onClick={function () {
                                newQuantity = item.quantity--
                                console.log(newQuantity)
                              }}
                            >
                              -
                            </button>
                            {item.quantity}
                            <button
                              onClick={function () {
                                newQuantity = item.quantity++
                                console.log(newQuantity)
                              }}
                            >
                              +
                            </button>
                          </div>
                        ) : (
                          item.quantity
                        )}
                      </td>
                      <td>${(item.grocery.price / 100).toFixed(2)}</td>
                      <td>${(item.subtotal / 100).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    {/* <th className="hidden">Image</th> */}
                    <th colSpan="2">Total Qty.:</th>
                    <th>{totalQuantity}</th>
                    <th>Total Price:</th>
                    <th>${(totalPrice / 100).toFixed(2)}</th>
                  </tr>
                </tfoot>
              </table>
              <div className="flex-container checkout">
                <button onClick={this.handleEdit}>
                  {this.state.edit ? 'Update Cart' : 'Edit Cart'}
                </button>
                <Link to={`/users/${this.props.userId}/checkout`}>
                  <button>Checkout</button>
                </Link>
              </div>
            </div>
          ) : (
            <small>
              Your cart is empty. See <Link to="/products">products</Link> to
              start shopping
            </small>
          )}
        </div>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    cart: state.cart,
    // isLoggedIn: !!state.auth.id,
    userId: state.auth.id,
  }
}

const mapDispatch = (dispatch) => {
  return {
    getCart: (userId) => dispatch(fetchCart(userId)),
  }
}

export default connect(mapState, mapDispatch)(Cart)
