import axios from 'axios'
const TOKEN = 'token'
const token = window.localStorage.getItem(TOKEN)

const SET_PRODUCTS = 'SET_PRODUCTS'
const CREATE_PRODUCT = 'CREATE_PRODUCT'
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

export const _deleteProduct = (productId) => {
  return {
    type: DELETE_PRODUCT,
    productId,
  }
}

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const { data: products } = await axios.get('/api/products')
      dispatch(setProducts(products))
    } catch (err) {
      console.log(err)
    }
  }
}

export const createProduct = (product, history) => {
  return async (dispatch) => {
    if (token) {
      const { data: created } = await axios.post('/api/products', product, {
        headers: {
          authorization: token,
        },
      })
      dispatch(_createProduct(created))
      history.push('/products')
    }
  }
}

export const deleteProduct = (productId) => {
  return async (dispatch) => {
    await axios.delete(`/api/products/${productId}`, {
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
      action.products.map(
        (product) => (product.price = (product.price / 100).toFixed(2))
      )
      return action.products
    case CREATE_PRODUCT:
      return [...state, action.product]
    case DELETE_PRODUCT:
      return state.filter((product) => product.id !== action.productId)
    default:
      return state
  }
}
