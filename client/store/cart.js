import axios from 'axios'
const TOKEN = 'token'
const token = window.localStorage.getItem(TOKEN)

const SET_CART = 'SET_CART'

export const setCart = (cart) => {
  return {
    type: SET_CART,
    cart
  }
}

export const fetchCart = (userId) => {
  return async (dispatch) => {
    if (token) {
      const { data: cart } = await axios.get(`/api/orders/${userId}`, {
        headers: {
          authorization: token,
        },
      })
      dispatch(setCart(cart))
    }
  }
}

export default function cartReducer(state = [], action) {
  switch (action.type) {
    case SET_CART:
      return action.cart
    default:
      return state
  }
}
