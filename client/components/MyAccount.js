import React from 'react'
import { connect } from 'react-redux'

class MyAccount extends React.Component {
  render() {
    const { firstName, lastName, email } = this.props
    return (
      <div className="grid-item flex-container account-info">
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
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
