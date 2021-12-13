import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store'

const Sidebar = () => {
  return (
    <div className="grid-item flex-container sidebar">
      <Link to="/myaccount">My Profile</Link>
      <Link to="">My Orders</Link>
    </div>
  )
}

// const mapState = (state) => {
//     return {
//       isLoggedIn: !!state.auth.id,
//     }
//   }

//   const mapDispatch = (dispatch) => {
//     return {
//       handleClick() {
//         dispatch(logout())
//       },
//     }
//   }

//export default connect(mapState, mapDispatch)(Sidebar)

export default Sidebar
