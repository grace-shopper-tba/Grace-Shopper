import axios from 'axios'
const TOKEN = 'token'
const token = window.localStorage.getItem(TOKEN)

const SET_CART = 'SET_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
// const UPDATE_ITEM = 'UPDATE_ITEM'

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

// export const _changeItemInCart = (orderItem) => {
//   return {
//     type: UPDATE_ITEM,
//     orderItem
//   }
// }

// thunk to get user's cart aka active order
// a new user with no cart will have a cart made
// this is an empty array, which you could check for
// in react and instead render something else

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

// thunk to update an item in cart
// the Express route updates the orderItem with req.body

export const changeItemInCart = (itemId, updateObj) => {
  return async () => {
    if (token) {
      const { data: orderItem } = await axios.put(`/api/orders/${itemId}`, updateObj, {
        headers: {
          authorization: token,
        },
      })
      // data from Express route is including Order, which has userId
      // so I thought I could use that to refetch the cart here
      // otherwise you could pass the userId from the frontend
      const { userId } = orderItem.Order
      fetchCart(userId)
      // if this works, you could change how cart is updated when
      // removing an item from cart
    }
  }
}

export default function cartReducer(state = [], action) {
  switch (action.type) {
    case SET_CART:
      return action.cart
    case REMOVE_FROM_CART:
      return state.filter(item => item.groceryId !== action.itemId)
    // case UPDATE_ITEM:
    //   return
    default:
      return state
  }
}
