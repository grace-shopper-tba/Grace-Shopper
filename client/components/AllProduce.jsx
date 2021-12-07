import React from 'react';
import { connect } from 'react-redux';

const dummyData = [{name: "Apple", price: 0.99}, {name: "Orange", price: 0.50}, {name: "Banana", price: 0.49}];

class AllProduce extends React.Component {
  render() {
    const allProduce = dummyData;
    return (
      <div>
        {allProduce.map(produce => (
          <p>
            Name: {produce.name} Price: {produce.price}
          </p>
        ))}
      </div>
    )
  }
}

export default AllProduce
