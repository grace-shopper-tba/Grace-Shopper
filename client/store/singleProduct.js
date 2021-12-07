import axios from "axios";

const SET_PRODUCT = "SET_PRODUCT";

const setProduct = (product) => {
  return {
    type: SET_PRODUCT,
    product,
  };
};

export const fetchSingleProduct = (productId) => {
  return async (dispatch) => {
    try {
      const { data: product } = await axios.get(`/api/products/${productId}`);
      dispatch(setProduct(product));
    } catch (error) {
      console.error(error);
    }
  };
};

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCT:
      return action.product;
    default:
      return state;
  }
}
