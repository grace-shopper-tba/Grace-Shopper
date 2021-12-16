import React from 'react'
import { connect } from 'react-redux'

class MyOrder extends React.Component {
  render() {
    return (
      <div>

      </div>
    )
  }
}

const mapState = (state) => {
  return {
    userId: state.auth.id,
    orders: state.orders
  }
}

const mapDispatch = (dispatch) => {
  return {
    getOrder: () => dispatch()
  }
}

export default connect (mapState, mapDispatch)(MyOrder)
