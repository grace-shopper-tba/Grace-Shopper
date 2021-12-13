import axios from 'axios';
//Note: Will need seperate actions/thunks/cases for adding and removing items from cart
const SET_CART = 'SET_CART'

export const setCart = (cart) => {
  return {
    type: SET_CART,
    cart
  }
}

export const fetchCart = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get('route to get cart if user has one already')
      dispatch(setCart(data))
    }
    catch (err) {
      console.log(err)
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
