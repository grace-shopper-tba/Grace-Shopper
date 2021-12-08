import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../store/products';

class AllProducts extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    const allProducts = this.props.products
    return (
      <div className="products-box">
        {allProducts.map(product => (
          <p key={product.id}>
            <img src={product.imageUrl} className="products-img"/> <br />
            Name: {product.name} Price: {product.price}
          </p>
        ))}
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    products: state.products
  }
}

const mapDispatch = (dispatch) => {
  return {
    getProducts: () => dispatch(fetchProducts())
  }
}

export default connect(mapState, mapDispatch)(AllProducts);
