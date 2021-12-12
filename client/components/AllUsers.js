import React from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../store/users'

class AllUsers extends React.Component {
  componentDidMount() {
    this.props.getUsers()
  }

  render() {
    const users = this.props.users
    return (
      <div className="users-container">
        {users.map((user) => (
          <div key={user.id}>
            <p>
              ID: {user.id} <br />
              First Name: {user.firstName} <br />
              Last Name: {user.lastName} <br />
              Email: {user.email} <br />
              Account Created: {user.createdAt}
            </p>
          </div>
        ))}
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    users: state.users,
  }
}

const mapDispatch = (dispatch) => {
  return {
    getUsers: () => dispatch(fetchUsers()),
  }
}

export default connect(mapState, mapDispatch)(AllUsers)
