import axios from 'axios'
const TOKEN = 'token'
const token = window.localStorage.getItem(TOKEN)

const SET_PRODUCT = 'SET_PRODUCT'
const UPDATE_PRODUCT = 'UPDATE_PRODUCT'

const setProduct = (product) => {
  return {
    type: SET_PRODUCT,
    product,
  }
}

const _updateProduct = (product) => {
  return {
    type: UPDATE_PRODUCT,
    product,
  }
}

export const fetchSingleProduct = (productId) => {
  return async (dispatch) => {
    try {
      const { data: product } = await axios.get(`/api/products/${productId}`)
      dispatch(setProduct(product))
    } catch (error) {
      console.error(error)
    }
  }
}

export const updateProduct = (product, history) => {
  return async (dispatch) => {
    if (token) {
      const { data: updated } = await axios.put(
        `/api/products/${product.id}`,
        product,
        {
          headers: {
            authorization: token,
          },
        }
      )
      console.log('Dispatching')
      dispatch(_updateProduct(updated))
      history.push(`/products/${product.id}`)
    }
  }
}

const initialState = {}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCT:
      action.product.price = (action.product.price / 100).toFixed(2)
      return action.product
    case UPDATE_PRODUCT:
      action.product.price = (action.product.price / 100).toFixed(2)
      return action.product
    default:
      return state
  }
}
