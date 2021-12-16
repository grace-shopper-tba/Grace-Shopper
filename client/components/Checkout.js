import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Checkout = ({ user, firstName, lastName, phoneNumber, address }) => {
  return (
    <div className="grid-item checkout-container">
      <div>
        <h3>Recipient Information</h3>
        <div className="flex-container cartInfo">
          <h5>First Name</h5>
          <p>{firstName}</p>
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
      <Link to="/users/:userId/thankyou">
        <button>Confirm Order</button>
      </Link>
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
  }
}

export default connect(mapState)(Checkout)
