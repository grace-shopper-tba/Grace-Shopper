import React from 'react'
import { connect } from 'react-redux'

<<<<<<< Updated upstream
const Checkout = ({ user, firstName, lastName, phoneNumber, address }) => {
=======
const Checkout = ({ isLoggedIn, userId, firstName, lastName, phoneNumber, address }) => {
>>>>>>> Stashed changes
  return (
    <div className="grid-item checkout-container">
      <div>
        <h3>Recipient Information</h3>
        <div className="flex-container cartInfo">
          <h5>First Name</h5>
          <p>{firstName ? firstName : <input placeholder="First Name" />}</p>
        </div>
        <div className="flex-container cartInfo">
          <h5>Last Name</h5>
          <p>{lastName ? lastName : <input placeholder="Last Name" />}</p>
        </div>
        <div className="flex-container cartInfo">
          <h5>Phone Number</h5>
          <p>
            {phoneNumber ? (
              phoneNumber
            ) : (
              <input placeholder="Enter phone number" />
            )}
          </p>
        </div>
      </div>
      <div>
        <h3>Shipping Address</h3>
        <span>{firstName}</span>
        <span>{lastName ? lastName : null}</span>
        <p>
          {address ? address : <input placeholder="Enter shipping address" />}
        </p>
      </div>
<<<<<<< Updated upstream
      <button>Confirm Order</button>
=======
      {isLoggedIn ? (
        <Link to={`/users/${userId}/thankyou`}>
          <button>Confirm Order</button>
        </Link>
      ) : (
        <Link to='/thankyou'>
          <button>Confirm Order</button>
        </Link>
      )}
>>>>>>> Stashed changes
    </div>
  )
}

const mapState = (state) => {
  return {
    user: state.auth,
    firstName: state.auth.firstName,
    lastName: state.auth.lastName,
    phoneNumber: state.auth.phoneNumber,
    address: state.auth.address,
    isLoggedIn: !!state.auth.id
  }
}

export default connect(mapState)(Checkout)
