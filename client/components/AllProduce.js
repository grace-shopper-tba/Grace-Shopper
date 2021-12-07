import React from 'react';
import { connect } from 'react-redux';
import { fetchProduce } from '../store/produce';

const dummyData = [{name: "Apple", price: 0.99, id: 1}, {name: "Orange", price: 0.50, id: 2}, {name: "Banana", price: 0.49, id: 3}];

class AllProduce extends React.Component {
  render() {
    const allProduce = dummyData;
    return (
      <div>
        {allProduce.map(produce => (
          <p key={produce.id}>
            Name: {produce.name} Price: {produce.price}
          </p>
        ))}
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    produce: state.produce
  }
}

const mapDispatch = (dispatch) => {
  return {
    getProduce: () => dispatch(fetchProduce())
  }
}

export default connect(mapState, mapDispatch)(AllProduce);
