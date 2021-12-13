import axios from 'axios';
// Note: Will need seperate actions/thunks/cases for adding and removing items from cart
const SET_CART = 'SET_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

// actions

export const setCart = (cart) => {
  return {
    type: SET_CART,
    cart
  }
}

export const _addToCart = (cart) => {
  return {
    type: ADD_TO_CART,
    cart
  }
}

export const _removeFromCart = (cart) => {
  return {
    type: REMOVE_FROM_CART,
    cart
  }
}

// thunks

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

export const addToCart = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.put('route to update cart')
      dispatch(_addToCart(data))
    }
    catch (err) {
      console.log(err)
    }
  }
}

export const removeFromCart = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.put('route to remove item from cart')
      dispatch(_removeFromCart(data))
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
    case ADD_TO_CART:
      return state
    case REMOVE_FROM_CART:
      return state
    default:
      return state
  }
}
