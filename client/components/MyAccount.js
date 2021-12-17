import React from 'react'
import { connect } from 'react-redux'

class MyAccount extends React.Component {
  render() {
    const { firstName, lastName, email } = this.props
    return (
      <div className="grid-item flex-container">
        <div className="my-account">
          <h3>First Name: </h3>
          <p>{firstName}</p>
          <h3>Last Name: </h3>{' '}
          <p>{lastName ? lastName : 'No last name on file yet'}</p>
          <h3>Email: </h3>
          <p>{email}</p>
        </div>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    firstName: state.auth.firstName,
    lastName: state.auth.lastName,
    email: state.auth.email,
  }
}

export default connect(mapState)(MyAccount)
