import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../store/users';


class AllUsers extends React.Component {
  componentDidMount() {
    this.props.getUsers()
  }

render() {
  const users = this.props.users;
  return (
    <div>
      {users.map(user => (
        <p key={user.id}>
          ID: {user.id} <br />
          Name: {user.firstName} {user.lastName} <br />
        </p>
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

export default connect(mapState, mapDispatch)(AllUsers);
