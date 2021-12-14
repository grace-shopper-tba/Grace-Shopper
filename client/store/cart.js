import axios from 'axios'

// Note: there's some guess work involved especially regarding removing an item from cart. I would need to actually run the app and check console/logger to confirm things. The express route currently just sends back a string; it needs to send back something I can use to filter the removed item from cart, or simply send back the whole cart

const SET_CART = 'SET_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

// actions

export const setCart = (cart) => {
  return {
    type: SET_CART,
    cart,
  }
}

// Note: this will need to change or be removed depending on how backend express route is changed
export const removeFromCart = (placeholder) => {
  return {
    type: REMOVE_FROM_CART,
    placeholder,
  }
}

// thunks

export const fetchCart = (userId) => {
  return async (dispatch) => {
    try {
      const { data: cart } = await axios.get(`/api/orders/${userId}`)
      // if(!cart){
      //   await axios.post('/', userId)
      // }
      dispatch(setCart(cart))
    } catch (err) {
      console.error(err)
    }
  }
}

// Note: addObj is expected to have userId, groceryId, quantity,
export const addToCart = (addObj) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('/api/orders', addObj)
      dispatch(setCart(data))
    } catch (err) {
      console.log(err)
    }
  }
}

export const _removeFromCart = (itemId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete('/api/orders', itemId)
      dispatch(removeFromCart(data))
    } catch (err) {
      console.log(err)
    }
  }
}

//reducer

export default function cartReducer(state = [], action) {
  switch (action.type) {
    case SET_CART:
      return action.cart
    case REMOVE_FROM_CART:
      //placeholder; if entire cart is sent back, just use SET_CART
      return state.filter((item) => item.id != action.item.id)
    default:
      return state
  }
}
