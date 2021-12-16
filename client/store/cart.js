import axios from 'axios'
const TOKEN = 'token'
const CART = 'cart'

const SET_CART = 'SET_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
// const UPDATE_ITEM = 'UPDATE_ITEM'
const ADD_TO_CART = 'ADD_TO_CART'
const LOGOUT = 'LOGOUT'

export const setCart = (cart) => {
  return {
    type: SET_CART,
    cart,
  }
}

export const _removeFromCart = (itemId) => {
  return {
    type: REMOVE_FROM_CART,
    itemId,
  }
}

// export const _changeItemInCart = (orderItem) => {
//   return {
//     type: UPDATE_ITEM,
//     orderItem
//   }
// }
export const _addToCart = (newCart) => {
  return {
    type: ADD_TO_CART,
    newCart,
  }
}

// thunk to get user's cart aka active order
// a new user with no cart will have a cart made
// this is an empty array, which you could check for
// in react and instead render something else

export const fetchCart = (userId) => {
  return async (dispatch) => {
    const token = window.localStorage.getItem(TOKEN)
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
      const { data: orderItem } = await axios.put(
        `/api/orders/${itemId}`,
        updateObj,
        {
          headers: {
            authorization: token,
          },
        }
      )
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
// userId, groceryId, quantity, subtotal
export const addToCart = (item) => {
  return async (dispatch) => {
    const token = window.localStorage.getItem(TOKEN)
    if (token) {
      const { data: newCart } = await axios.post(`/api/orders`, item)
      dispatch(_addToCart(newCart))
    } else {
      let cart = window.localStorage.getItem(CART)
      if (cart) {
        cart = JSON.parse(cart)
      } else {
        window.localStorage.setItem(CART, '[]')
        // cart = window.localStorage.getItem(CART)
        cart = JSON.parse(window.localStorage.getItem(CART))
      }
      cart.push(item)
      localStorage.setItem(CART, JSON.stringify(cart))
    }
    /*
    else {
      window.localStorage.setItem(CART, '[]')
      console.log('new cart -->')
      let otherVar = JSON.parse(window.localStorage.getItem(CART))
      console.log(otherVar)
      console.log(typeof otherVar)
      console.log(Array.isArray(otherVar))
      otherVar.push(item)
      // JSON.stringify(window.localStorage.setItem(CART, otherVar))
      // console.log(JSON.parse(window.localStorage.getItem(CART)))
    }
    */
  }
}

export default function cartReducer(state = [], action) {
  switch (action.type) {
    case SET_CART:
      return action.cart
    case REMOVE_FROM_CART:
      return state.filter((item) => item.groceryId !== action.itemId)
    // case UPDATE_ITEM:
    //   return
    case ADD_TO_CART:
      return action.newCart
    case LOGOUT:
      return []
    default:
      return state
  }
}
