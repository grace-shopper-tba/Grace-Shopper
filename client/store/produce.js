import axios from 'axios';

const SET_PRODUCE = 'SET_PRODUCE';

export const setProduce = (produce) => {
  return {
    type: SET_PRODUCE,
    produce
  }
}

export const fetchProduce = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get('/api/products');
      dispatch(setProduce(data));
    }
    catch (err) {
      console.log(err);
    }
  }
}

export default function produceReducer(state = [], action) {
  switch (action.type) {
    case SET_PRODUCE:
      return action.produce;
    default:
      return state;
  }
}
