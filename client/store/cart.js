import axios from 'axios'
const TOKEN = 'token'
const token = window.localStorage.getItem(TOKEN)

const SET_CART = 'SET_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const UPDATE_ITEM = 'UPDATE_ITEM'

export const setCart = (cart) => {
  return {
    type: SET_CART,
    cart
  }
}

export const _removeFromCart = (itemId) => {
  return {
    type: REMOVE_FROM_CART,
    itemId
  }
}

export const _changeItemInCart = (orderItem) => {
  return {
    type: UPDATE_ITEM,
    orderItem
  }
}

//thunk to get user's cart aka active order

export const fetchCart = (userId) => {
  return async (dispatch) => {
    if (token) {
      const { data: cart } = await axios.post('/api/orders', userId, {
        headers: {
          authorization: token,
        },
      })
      dispatch(setCart(cart))
    }
  }
}

// thunk to remove an item from cart aka active order

export const removeFromCart = (itemId) => {
  return async (dispatch) => {
    if (token) {
      await axios.delete(`/api/orders/${itemId}`, {
        headers: {
          authorization: token,
        },
      })
      dispatch(_removeFromCart(itemId))
    }
  }
}

// thunk to update an item

export const changeItemInCart = (itemId) => {
  return async (dispatch) => {
    if (token) {
      const { data: orderItem } = await axios.put(`/api/orders/${itemId}`, {
        headers: {
          authorization: token,
        },
      })
      dispatch(_changeItemInCart(orderItem))
    }
  }
}

export default function cartReducer(state = [], action) {
  switch (action.type) {
    case SET_CART:
      return action.cart
    case REMOVE_FROM_CART:
      return state.filter(item => item.groceryId !== action.itemId)
    case UPDATE_ITEM:
      return [...state, action.orderItem]
    default:
      return state
  }
}
