import axios from 'axios';

const SET_CART = 'SET_CART'

// actions

export const setCart = (cart) => {
  return {
    type: SET_CART,
    cart
  }
}

// thunks

export const fetchCart = (userId) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get('/api/orders', userId)
      dispatch(setCart(data))
    }
    catch (err) {
      console.log(err)
    }
  }
}
// Note: addObj is expected to have userId, groceryId, quantity, and subtotal
export const addToCart = (addObj) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.post('/api/orders', addObj)
      dispatch(setCart(data))
    }
    catch (err) {
      console.log(err)
    }
  }
}
//Note: express route not finished; placeholder
export const removeFromCart = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.put('route to remove item from cart')
      dispatch(setCart(data))
    }
    catch (err) {
      console.log(err)
    }
  }
}


//reducer

export default function cartReducer(state = [], action) {
  switch (action.type) {
    case SET_CART:
      return action.cart
    default:
      return state
  }
}
