import axios from 'axios'
const TOKEN = 'token'
const token = window.localStorage.getItem(TOKEN)

const SET_PRODUCTS = 'SET_PRODUCTS'
const CREATE_PRODUCT = 'CREATE_PRODUCT'
const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
const DELETE_PRODUCT = 'DELETE_PRODUCT'

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    products,
  }
}

const _createProduct = (product) => {
  return {
    type: CREATE_PRODUCT,
    product,
  }
}

const _updateProduct = (product) => {
  return {
    type: UPDATE_PRODUCT,
    product,
  }
}

export const _deleteProduct = (productId) => {
  return {
    type: DELETE_PRODUCT,
    productId,
  }
}

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/products')
      dispatch(setProducts(data))
    } catch (err) {
      console.log(err)
    }
  }
}

export const createProduct = (product) => {
  return async (dispatch) => {
    if (token) {
      const { data: created } = await axios.post('/api/products', product, {
        headers: {
          authorization: token,
        },
      })
      return dispatch(_createProduct(created))
    }
  }
}

export const updateProduct = (product) => {
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
      dispatch(_updateProduct(updated))
    }
  }
}

export const deleteProduct = (productId) => {
  return async (dispatch) => {
    await axios.delete(`/api/products/${productId}`, productId, {
      headers: {
        authorization: token,
      },
    })
    dispatch(_deleteProduct(productId))
  }
}

export default function productsReducer(state = [], action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products
    case CREATE_PRODUCT:
      return [...state, action.product]
    // case UPDATE_PRODUCT:
    //   return
    case DELETE_PRODUCT:
      return state.filter((product) => product.id !== action.productId)
    default:
      return state
  }
}
