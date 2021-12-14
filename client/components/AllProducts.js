import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../store/products'

class AllProducts extends React.Component {
  componentDidMount() {
    this.props.getProducts()
  }
  render() {
    const allProducts = this.props.products
    const admin = this.props.admin
    const style = {
      textDecoration: 'none',
      color: 'black',
    }
    console.log(admin)
    return (
      <div className="grid-item">
        <h1>Store</h1>
        <button className={admin ? '' : 'admin-buttons'}>Add a product</button>
        <div className="flex-container products-container">
          {allProducts.map((product) => (
            <div className="flex-container product-items" key={product.id}>
              <Link style={style} to={`/products/${product.id}`}>
                <img src={product.imageUrl} className="products-img" /> <br />
                <h3 className="product-name">{product.name}</h3>
                <p>Price: ${(product.price / 100).toFixed(2)}</p>
              </Link>
              <button className={admin ? '' : 'admin-buttons'}>Edit</button>
              <button className={admin ? '' : 'admin-buttons'}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    products: state.products,
    admin: state.auth.isAdmin,
  }
}

const mapDispatch = (dispatch) => {
  return {
    getProducts: () => dispatch(fetchProducts()),
  }
}

export default connect(mapState, mapDispatch)(AllProducts)
