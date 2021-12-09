import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../store/products';

class AllProducts extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    const allProducts = this.props.products
    const style = {
      textDecoration: 'none',
      color: 'black'
    }
    return (
      <div className="products-box">
        {allProducts.map(product => (
          <p key={product.id}>
            <Link style={style} to={`/products/${product.id}`}>
              <img src={product.imageUrl} className="products-img"/> <br />
              Name: {product.name} Price: {product.price}
            </Link>
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
