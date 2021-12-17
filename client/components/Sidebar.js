import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = ({ admin, userId }) => {
  return admin ? (
    <div className="grid-item flex-container sidebar">
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
    admin: state.auth.isAdmin,
    userId: state.auth.id,
  }
}

export default connect(mapState)(Sidebar)
