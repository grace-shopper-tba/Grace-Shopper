import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store'

const Sidebar = ({ admin, userId }) => {
  return admin ? (
    <div className="grid-item flex-container sidebar">
      {/* if the user is an admin, show another link for a users page */}
      <Link to="/users">All users</Link>
      <Link to="/products/add">Add Products</Link>
    </div>
  ) : (
    <div className="grid-item flex-container sidebar">
      <Link to="/home">Welcome</Link>
      <Link to="/myaccount">My Profile</Link>
    </div>
  )
}

const mapState = (state) => {
  return {
    // isLoggedIn: !!state.auth.id,
    admin: state.auth.isAdmin,
    userId: state.auth.id,
  }
}

// const mapDispatch = (dispatch) => {
//   return {
//     handleClick() {
//       dispatch(logout())
//     },
//   }
// }

export default connect(mapState)(Sidebar)

// export default Sidebar
