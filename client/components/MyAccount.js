import React from ' react'
import {connect} from 'react-redux'


class MyAccount extends React.Component {
  render() {
    const {firstName, lastName, email} = this.props
    return (
      <div>
        <p>
          First Name: {firstName} <br />
          Last Name: {lastName} <br />
          Email: {email}
        </p>
      </div>
    )
  }
}

const mapState = state => {
  return {
    firstName: state.auth.firstName,
    lastName: state.auth.lastName,
    email: state.auth.email,
  }
}

export default connect(mapState)(MyAccount)
