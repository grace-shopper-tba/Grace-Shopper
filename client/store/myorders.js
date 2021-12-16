import axios from 'axios'
const TOKEN = 'token'

const SET_ORDERS = 'SET_ORDERS'

const setOrders = (orders) => {
  return {
    type: SET_ORDERS,
    orders
  }
}

export const fetchOrders = (userId) => {
  return async (dispatch) => {
    const token = window.localStorage.getItem(TOKEN)
    if (token) {
      const { data: orders } = await axios.get(`/api/orders/${userId}`, {
        headers: {
          authorization: token,
        }
      })
      return dispatch(setOrders(orders))
    }
  }
}

export default function ordersReducer(state = [],action) {
  switch (action.type) {
    case SET_ORDERS:
      return action.orders
    default:
      return state
  }
}
